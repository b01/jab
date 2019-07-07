import fs from 'fs';

export let showInstalledBoilerplates = async function (path) {
    if (global.DEBUG) console.debug('path', path);

    return new Promise((resolve, reject) => {
        fs.readdir(path, {withFileTypes: true}, function (err, files) {
            if (err) {
                return reject(err);
            }

            files.forEach((dirent, i) => {
                if (dirent.isDirectory()) {
                    console.log(`\t- ${dirent.name}\n`);
                }
            });

            resolve();
        });
    })
    .catch(err => { // supply a default catch so the user does not have too.
        throw err
    });
};

export default showInstalledBoilerplates;