#! /usr/bin/env node

import { cwd } from './lib/cwd.mjs';
import commander from 'commander';
import buildAppSkeleton from './lib/buildAppSkeleton.mjs';
import { showInstalledBoilerplates } from './lib/showInstalledBoilerplates.mjs';
import fs from 'fs';

const __dirname = cwd(import.meta);
const BOILERPLATE_DIR = `${__dirname}/../boilerplates`;
let pkg = fs.readFileSync(`${__dirname}/../package.json`).toString();

const options = commander
    .version(JSON.parse(pkg).version, '-v, --version')
    .usage('<boilerplate> <appPath> [app-id] [app-name]')
    .description('Makes a new application from a boilerplate.')
    .arguments('<boilerplate> <appPath> [appId] [appName]')
    .action((boilerplate, appPath, appId, appName) => {
        appId = typeof appId !== 'undefined' ? appId : '';
        appName = typeof appName !== 'undefined' ? appName : '';

        buildAppSkeleton(boilerplate, appPath, appId, appName)
            .catch(() => {
                console.log(err);
                process.exitCode = 1;
            });
    })
    .option('--show', 'show installed boilerplates.');

options.on('option:verbose', function () {
    process.env.VERBOSE = this.verbose;
});

options.parse(process.argv);

if (process.argv.slice(2).length === 0) {
    options.outputHelp();
}

if (options.show) {
    console.log('Showing installed boilerplates:');
    showInstalledBoilerplates(BOILERPLATE_DIR);
}
