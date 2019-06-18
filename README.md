# jab (JavaScript Application Boilerplate)

A tool/utility to initilize an application/project skeleton from a boilerplate.

## Get Started

* Using Docker
  `docker run -it jab <template-name> <app-folder-name>`
* Using local installation of NodeJS/NPM.
  `npm install --global jab`
  `npm jab docker run -it jab <boiler-plate-template-name> <app-folder-name>`

The command above will perform the following:

1. Create a folder (if it does not already exists).
2. Fill the folder with the default contents of the chosen template.

## See a list of available bolier plates

`npm jab show`
