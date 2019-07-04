import {cwd } from '../../src/lib/cwd.mjs';
import { exec } from 'child_process';
import { expect } from 'chai';
import { fixtures } from './fixtures/cli-01.mjs';

const __dirname = cwd(import.meta);
const FIXTURES = `${__dirname}/fixtures`;
const CMD = `${__dirname}/../../src/cli.mjs`;

describe('Given the jab command', function () {
    describe('When passed valid arguments', function () {
        it('Then make a new app', function (done) {
            exec(
                `node ${CMD}`,
                (err, stdout) => {
                    console.log('stdout', stdout);
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
                (err, stdout, stderr) => {
                    console.log('stdout', stdout);
                    if (err) {
                        return done(err);
                    }
                    expect(/\d\.\d\.\d/.test(stdout)).to.be.equal(true);
                    done();
                }
            );
        });
    });
});
