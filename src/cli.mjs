#! /usr/bin/env node

import { cwd } from './lib/cwd.mjs';
import { buildAppSkeleton } from './lib/buildAppSkeleton.mjs';
import commander from 'commander';
import { showInstalledBoilerplates } from './lib/showInstalledBoilerplates.mjs';
import { readFileSync } from 'fs';
import { dirname } from 'path';

const __dirname = cwd(import.meta);
const BOILERPLATE_DIR = `${__dirname}/../boilerplates`;

let [,, ... args] = process.argv;
let pkg = readFileSync(`${__dirname}/../package.json`).toString();
let options = commander
    .version(JSON.parse(pkg).version, '-v, --version')
    .usage('<boilerplate> <appPath> [app-id] [app-name]')
    .description('Makes a new application from a boilerplate.')
    .arguments('<boilerplate> <appPath> [appId] [appName]')
    .option('--show', 'show installed boilerplates.');

options.on('option:verbose', function () {
    process.env.VERBOSE = this.verbose;
});

options.parse(process.argv);

if (args.length === 0) {
    options.outputHelp();
}

if (options.args.length > 1) {
    // TODO: handle if == "." or "./" use current dir name, else basename.
    let basename = dirname(options.args[1]);
    console.log('basename:', basename);
    let appId = options.args.length > 2 ? options.args[2] : basename;
    let appName = options.args.length > 3 ? options.args[3] : basename;

    buildAppSkeleton(options.args[0], options.args[1], appId, appName)
        .catch(() => {
            console.log(err);
            process.exitCode = 1;
        });
}

if (options.show) {
    console.log('Showing installed boilerplates:');
    showInstalledBoilerplates(BOILERPLATE_DIR);
}
