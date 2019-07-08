import { cwd } from '../../src/lib/cwd.mjs';
const expect = require('chai').expect;
import { getDirContents } from '../../src/lib/getDirContents.mjs';
import { fixtures } from './fixtures/getDirContents-01.mjs';

const __dirname = cwd(import.meta);
const FIXTURES = `${__dirname}/fixtures`;

describe('Given the function getDirContents', function () {
    describe('When passed a path to a directory with files', function () {
        it('Then returns a flat array of all files and directories', async function () {
            let actual = await getDirContents(`${FIXTURES}/boilerplate-01`);
            expect(actual).to.have.deep.members(fixtures.fixture1);
        });
    });
});
