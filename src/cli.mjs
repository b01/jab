#! /usr/bin/env node

import { cwd } from './lib/cwd.mjs';
import { getDirContents } from './lib/getDirContents.mjs';
import commander from 'commander';

const [,, ... args] = process.argv;
const __dirname = cwd(import.meta);

console.log('__dirname:', __dirname);
// TODO: Setup arguments, see commander README.md
getDirContents('/app/test/mocha/fixtures/boilerplate-01')
    .then((contents) => {
        console.log('boilerplate:', contents);
    });
// TODO: Copy boilerplate into place.
// TODO: Perform placeholder updates on files.
