# jab (JavaScript Application Boilerplate)

A tool/utility to initialize an application/project skeleton from a
boilerplate.


## Table of Contents

* [Get Started](#get-started)
* [Built-in Boilerplates](#built-in-boilerplates)
* [References](#references)

## Get Started

* Using Docker
  `docker run -it -v "${PWD}:/tmp" jabd/jab <boilerplate> <app-location> <app-id> <app-name>`
* Using local installation of NodeJS/NPM.
  `npm install --global jab`
  `jab <boilerplate> <app-location> <app-id> <app-name>`

The command above will perform the following:

1. Make a folder (if it does not already exists) or use an existing empty one.
2. Fill the folder with the default contents of the chosen boilerplate.

NOTE: The <app-name> and <app-id> will be used to fill in placeholders 
**\_\_APP_ID_NAME\_\_ and **\_\_APP_ID_NAME\_\_ respectively.

## Built-in Boilerplates

To see a list of available boilerplates: `jab show`

## References

[shunit2](https://github.com/kward/shunit2)
[mjs-mocha](https://github.com/vpotseluyko/mjs-mocha)
[An example of recursion with Promises](https://gist.github.com/magnetikonline/bfaf2ada33c4922b1a7b0dc876b9aef4)
[esm](http://2ality.com/2018/12/nodejs-esm-phases.html)