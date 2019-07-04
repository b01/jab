import fs from 'fs';
import ncp from "ncp";

/**
 *
 * @param {string} template Path to template files.
 * @param {string} dest Empty path to new application.
 * @param {string} appId Application ID.
 * @param {string} appName Human readable application name.
 * @returns {Promise<any | never>}
 */
export let buildAppSkeleton = (template, dest, appId, appName) => {
    if (fs.existsSync(dest)
        && fs.statSync(dest).isDirectory()
        && fs.readdirSync(dest).length > 0) {
        throw new Error(`The ${dest} directory exist with files. Abort.`);
    }

    return new Promise((resolve, reject) => {
        // Copy boilerplate to destination.
        ncp(
            template,
            dest,
            {
                stopOnErr: true,
                transform: function (reader, writer) {
                    returnVal.outputPaths.push(writer.path);

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
        });
};

export default buildAppSkeleton;