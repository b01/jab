import {cwd } from '../../src/lib/cwd.mjs';
import { exec } from 'child_process';
import { expect } from 'chai';
import fs from 'fs';

const __dirname = cwd(import.meta);
const FIXTURES = `${__dirname}/fixtures`;
const CMD = `${__dirname}/../../src/cli.mjs`;
const BLAST_ZONE = `${__dirname}/tmp/cli`;

before(() => {
    fs.mkdirSync(BLAST_ZONE);
});

describe('Given the jab command', function () {
    describe('When passed no arguments', function () {
        it('Then will output usage message', function (done) {
            exec(
                `node ${CMD}`,
                (err, stdout) => {
                    expect(err).to.be.equal(null);
                    expect(stdout).to.contain('Usage: ');
                    done();
                }
            );
        });
    });
    describe('When passed flags as arguments', function () {
        it('Then -v will print the version', function (done) {
            exec(
                `${CMD} -v`,
                (err, stdout) => {
                    if (err) {
                        return done(err);
                    }
                    expect(/\d\.\d\.\d/.test(stdout)).to.be.equal(true);
                    done();
                }
            );
        });
    });
    describe('When passed valid arguments', function () {
        it('Then makes a new application', function (done) {
            let fixturePath = `${BLAST_ZONE}/web-01`;

            exec(
                `node ${CMD} web ${fixturePath} test.4321 "Jab Test"`,
                (err, stdout) => {
                    let txt = fs.readFileSync(`${fixturePath}/README.md`).toString();
                    console.log('stdout', stdout);
                    expect(err).to.be.equal(null);
                    expect(txt).to.contain('Jab Test');
                    done();
                }
            );
        });
    });
});
