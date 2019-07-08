#! /usr/bin/env node

// HACK: ES Modules are still experimental and have some
// strange conditions and still are not compatible with
// a lot of existing NodeJS packages in the ecosystem. Even
// though they are highly desired by the NodeJS community.
// However, esm is a nice alternative to using Babel. Even
// given is unintuitive requirements in order to work; its
// far better when compared to the confusion that is Babel.

// Instead of using NODE_OPTIONS="--experimental-modules"
// We use this approach and rename mjs files to js so that
// we can get code coverage from nyc.
require = require("esm")(module);
module.exports = require("./main.mjs");
