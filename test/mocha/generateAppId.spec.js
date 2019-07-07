import {cwd } from '../../src/lib/cwd.mjs';
import { expect } from 'chai';
import { generateAppId } from '../../src/lib/generateAppId.mjs';
import { mkdirSync } from 'fs';

const __dirname = cwd(import.meta);
const BLAST_ZONE = `${__dirname}/tmp/generateAppId`;

before(() => {
    mkdirSync(BLAST_ZONE);
    mkdirSync(`${BLAST_ZONE}/part1`);
});

describe('Given the function generateAppId', function () {
    describe('When passed a path of format /part1/part2', function () {
        it('Then return a valid app ID string', function (done) {
            let actual = generateAppId(
                `/part1/part2`
            );
            expect(actual).to.equal('part1.part2');
            done();
        });
    });
    describe('When passed a path of format /part1/part2/', function () {
        it('Then return a valid app ID string', function (done) {
            let actual = generateAppId(
                '/part1/part2/'
            );
            expect(actual).to.equal('part1.part2');
            done();
        });
    });
    describe('When passed a path of format /part1/../part3', function () {
        it('Then return a valid app ID string', function (done) {
            let actual = generateAppId(
                `${BLAST_ZONE}/part1/../part3`
            );
            expect(actual).to.equal('app.test.mocha.tmp.generateAppId.part3');
            done();
        });
    });
    describe('When passed a path of format /part1/../p..4/', function () {
        it('Then return a valid app ID string', function (done) {
            let actual = generateAppId(
                `${BLAST_ZONE}/part1/../p..4`
            );
            expect(actual).to.equal('app.test.mocha.tmp.generateAppId.p..4');
            done();
        });
    });
    describe('When passed a path of format . or ./ or ./Test', function () {
        it('Then return an app ID for .', function (done) {
            let actual = generateAppId(
                `.`
            );
            expect(actual).to.equal('app');
            done();
        });
        it('Then return an app ID for ./', function (done) {
            let actual = generateAppId(
                `./`
            );
            expect(actual).to.equal('app');
            done();
        });
        it('Then return an app ID for ./Test', function (done) {
            let actual = generateAppId(
                `./Test`
            );
            expect(actual).to.equal('Test');
            done();
        });
    });
});
