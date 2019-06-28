import { dirname } from 'path';
import { fileURLToPath } from 'url';

export let cwd = (meta) => {
    return dirname(fileURLToPath(meta.url));
};

export default cwd;