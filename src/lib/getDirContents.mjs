import fs from 'fs';

/**
 * Get a directory contents as a flat array.
 *
 * @param {string} path Path to a directory that exists.
 * @returns {Promise<any | Promise<any | never>>}
 */
export let getDirContents = async function (path) {
    if (global.DEBUG) console.debug('path', path);

    return new Promise((resolve, reject) => {
        let contents = [], promises = [];

        fs.readdir(path, {withFileTypes: true}, function (err, files) {
            if (err) {
                return reject(err);
            }

            files.forEach((dirent, i) => {
                let fullPath = `${path}/${dirent.name}`;

                if (global.DEBUG) console.debug(`path-${i}: ${path}/${dirent.name}`);
                contents.push(fullPath);

                if (dirent.isDirectory()) {
                    let aProm = getDirContents(fullPath);

                    promises.push(aProm);
                }
            });

            if (global.DEBUG) console.debug('promises', promises);

            if (promises.length > 0) {
                Promise.all(promises)
                    .then((values) => {
                        values.map(x => {
                            x.map( y => contents.push(y));
                        });
                        resolve(contents);
                    });
            } else {
                resolve(contents);
            }

            if (global.DEBUG) console.debug('contents', contents);
        });
    })
    .catch(err => { // supply a default catch so the user does not have too.
        throw err
    });
};

export default getDirContents;