import fs from 'fs';

export let getDirContents = async function (path) {
    // console.debug('path', path);

    return new Promise((resolve, reject) => {
        let contents = [], promises = [];

        fs.readdir(path, {withFileTypes: true}, function (err, files) {
            if (err) {
                return reject(err);
            }

            files.forEach((dirent, i) => {
                let fullPath = `${path}/${dirent.name}`;

                // console.debug(`path-${i}: ${path}/${dirent.name}`);
                contents.push(fullPath);

                if (dirent.isDirectory()) {
                    let aProm = getDirContents(fullPath);

                    promises.push(aProm);
                }
            });

            console.debug('promises', promises);
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

            // console.debug('contents', contents);
        });
    })
    .catch(err => { // supply a default catch so the user does not have too.
        throw err
    });
};

export default getDirContents;