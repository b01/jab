#! /usr/bin/env node

import { cwd } from './lib/cwd.mjs';
import commander from 'commander';
import buildAppSkeleton from './lib/buildAppSkeleton.mjs';
import fs from 'fs';

const __dirname = cwd(import.meta);
let pkg = fs.readFileSync(`${__dirname}/../package.json`).toString();

const options = commander
    .version(JSON.parse(pkg).version, '-v, --version')
    .usage('<template> <appPath> <app-id> <app-name>')
    .description('Makes a new application from a template.')
    .arguments('<boilerplate> <appPath> <appId> <appName>')
    .action((boilerplate, appPath, appId, appName) => {
        buildAppSkeleton(boilerplate, appPath, appId, appName)
            .catch(() => {
                process.exitCode = 1;
                console.log(err);
            });
    });

options.on('option:verbose', function () {
    process.env.VERBOSE = this.verbose;
});

options.parse(process.argv);

if (process.argv.slice(2).length === 0) {
    process.exitCode = 1;
    options.outputHelp();
}
