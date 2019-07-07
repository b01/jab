import { cwd } from './cwd.mjs';
import fs from 'fs';
import ncp from "ncp";

const __dirname = cwd(import.meta);
const BOILERPLATE_DIR = `${__dirname}/../../boilerplates`;

/**
 * @param {string} boilerplate Name of a boilerplate.
 * @param {string} appPath An empty or non-existing directory to make the new application.
 * @param {string} appId Optional application ID.
 * @param {string} appName Optional human readable application name.
 * @returns {Promise<any | never>}
 */
export let buildAppSkeleton = (boilerplate, appPath, appId, appName) => {
    let bPath = getBoilerplatePath(boilerplate);

    if (fs.existsSync(appPath)
        && fs.statSync(appPath).isDirectory()
        && fs.readdirSync(appPath).length > 0) {
        throw new Error(`The ${appPath} directory exist with files. Abort.`);
    }

    return new Promise((resolve, reject) => {
        // Copy boilerplate to destination.
        ncp(
            bPath,
            appPath,
            {
                stopOnErr: true,
                transform: function (reader, writer) {
                    // listen for errors.
                    reader.on('error', (err) => {
                        console.log(err);
                        throw err;
                    });

                    // close write stream when no more data.
                    reader.on('end', () => {
                        writer.end();
                    });

                    // Perform placeholder updates on files.
                    reader.on('data', (chunk) => {
                        let str = chunk
                            .toString()
                            .replace('__APP_NAME__', appName)
                            .replace('__APP_ID_NAME__', appId);

                        writer.write(str);
                    });
                }
            },
            err => {
                if (err) {
                    return reject(err);
                }

                resolve(true);
            }
        );
    })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

let getBoilerplatePath = (boilerplate) => {
    let path = null;

    if (fs.existsSync(`${BOILERPLATE_DIR}/${boilerplate}`)) {
        path = `${BOILERPLATE_DIR}/${boilerplate}`;
    }

    // TODO: Lock-down behind a flag.
    if (fs.existsSync(boilerplate)) {
        path = boilerplate;
    }

    if (!fs.existsSync(path)) {
        throw Error(`Boiler plate ${boilerplate} does not exists.`);
    }

    return path;
};

export default buildAppSkeleton;