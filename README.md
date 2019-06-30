# jab (JavaScript Application Boilerplate)

A tool/utility to initilize an application/project skeleton from a boilerplate.

## Get Started

* Using Docker
  `docker run -it -v "${PWD}:/tmp" jabd/jab <boilerplate> <app-name> <path>`
* Using local installation of NodeJS/NPM.
  `npm install --global jab`
  `jab <boilerplate-name> <app-folder-name>`

The command above will perform the following:

1. Make a folder (if it does not already exists) or use an existing empty one.
2. Fill the folder with the default contents of the chosen boilerplate.

NOTE: that the name will be used to fill in application name placeholders. Also
an application ID (takend from the basename of the path) will be used to fill
in the application ID placeholders.

## See a list of available boilerplates

`npm jab show`

## References

[shunit2](https://github.com/kward/shunit2)
[mjs-mocha](https://github.com/vpotseluyko/mjs-mocha)
[An example of recursion with Promises](https://gist.github.com/magnetikonline/bfaf2ada33c4922b1a7b0dc876b9aef4)
