import {cwd } from '../../src/lib/cwd.mjs';
import { expect } from 'chai';
import { getDirContents } from '../../src/lib/getDirContents.mjs';
import { fixtures } from './fixtures/getDirContents-01.mjs';

const __dirname = cwd(import.meta);
const FIXTURES = `${__dirname}/fixtures`;
const APP_DIR = `${__dirname}/../..`;

describe('Given the function getDirContents', function () {
    describe('When passed a path to a directory with files', function () {
        it('Then return a flat array of all files and directories', async function () {
            let actual = await getDirContents(`${FIXTURES}/boilerplate-01`);
            expect(actual).to.have.deep.members(fixtures.fixture1);
        });
    });
});