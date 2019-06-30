import mocha from 'mocha';

let config = {
    asyncOnly: true,
    reporter: 'JSON',
    reporterOption: {}
};
let m = new mocha();


m.addFile('/app/test/mocha/getDirContents.spec.mjs');

m.run(function (arg1) {
    console.log('Finished custom test run.');
});