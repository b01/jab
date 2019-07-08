import { dirname, resolve } from 'path';

export let generateAppId = function (path) {
    let appId;

    if (global.DEBUG) console.debug('path', path);

    if (path === '.' || path === './' || /.\.\../.test(path)) {
        if (global.DEBUG) console.log('dirname', dirname(path));
        if (global.DEBUG) console.log('dirname', resolve(path));
        path = resolve(path);
    }

    appId = path.replace(/\\|\/|[a-zA-Z]:/g, '.');

    // remove beginning or ending .\/
    return appId.replace(/^(\.|\\|\/)+/, '')
                .replace(/(\.|\\|\/)+$/, '');
};

export default generateAppId;