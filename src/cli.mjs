#! /usr/bin/env node

import { execSync } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const [,, ... args] = process.argv;
let __dirname = dirname(fileURLToPath(import.meta.url));
let shellOptions = {
    timeout: 10
};
let isWindows = false;
let terminal = isWindows ? 'powershell.exe' : 'sh';
let ext = isWindows ? 'ps1' : 'sh';
let appSkeletonCmd = `${terminal} ${__dirname}/../bin/build-app-skeleton.${ext} ${args[0]} ${args[1]} ${args[2]}`;

execSync(
    appSkeletonCmd,
    shellOptions,
    (error, stdout, stderr) => {
        if (error !== null) {
            console.log(`exec error: ${error}`);
            return;
        }
        console.log(stdout, "\n", stderr);
    }
);
