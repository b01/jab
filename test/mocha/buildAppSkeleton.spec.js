import {cwd } from '../../src/lib/cwd.mjs';
import { expect } from 'chai';
import fs from 'fs';
import { buildAppSkeleton } from '../../src/lib/buildAppSkeleton.mjs';

const __dirname = cwd(import.meta);
const FIXTURES = `${__dirname}/fixtures`;
const BLAST_ZONE = `${__dirname}/tmp/buildAppSkeleton`;

before(() => {
    fs.mkdirSync(BLAST_ZONE);
});

describe('Given the function buildAppSkeleton', function () {
    describe('When passed valid arguments', function () {
        it('Then makes a new app', async function () {
            let actual = await buildAppSkeleton(
                `${FIXTURES}/boilerplate-01`,
                `${BLAST_ZONE}/test-app`,
                'test.app',
                'Test App'
            );
            return expect(actual).to.equal(true);
        });
    });
    describe('When passed a destination directory with files', function () {
        it('Then throws an error', async function () {
            fs.mkdirSync(`${BLAST_ZONE}/test-app2`);
            fs.mkdirSync(`${BLAST_ZONE}/test-app2/dummy`);

            return expect(
                    () => buildAppSkeleton(
                        `${FIXTURES}/boilerplate-01`,
                        `${BLAST_ZONE}/test-app2`,
                        'test.app.2',
                        'Test App 2'
                    )
                ).to.throw();
        });
    });
});
