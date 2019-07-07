# jab (JavaScript Application Boilerplate)

A tool/utility to initialize an application/project skeleton from a
boilerplate.

## Table of Contents

* [Get Started](#get-started)
* [Built-in Boilerplates](#built-in-boilerplates)
* [Using Docker](#using-docker)
* [References](#references)

## Get Started

### Installation

`yarn install --global jab`

### Usage

`jab <boilerplate> <app-location> <app-id> <app-name>`

The command above will perform the following:

1. Make a folder (if it does not already exists) or use an existing
   empty one.
2. Fill the folder with the default contents of the chosen boilerplate.

NOTE: The `<app-name>` and `<app-id>` will be used to fill in
      placeholders **\_\_APP_ID_NAME\_\_** and **\_\_APP_ID_NAME\_\_**
      respectively.

| Argument | Description |
| -------- | ----------- |
| `<boilerplate>` | Name of a boilerplate, which can be found [here](https://github.com/b01/jab-boilerplates/) |
| `<app-location>` | Directory path where the application will be output. |
| `<app-id>` | A unique string to identify the application, for example `my.app` |
| `<app-name>` | A human readable name for the application. |

## Built-in Boilerplates

To see a list of available boilerplates: `jab --show`

Boilerplate (in the case of **jab**) is just a directory containing
files and other directories. Currently files can contain 2 placeholders
that will be replaced when an application skeleton is built.

## Using Docker

If you already have Docker installed and want to avoid installing Node
just to use **jab**, try this:

```bash
docker run \
  -it -v "<local-dir>:/tmp" \
  jabd/jab \
  <boilerplate> /tmp/<app-location> <app-id> <app-name>
```

Linux/Mac/Windows example:

This will make a new application, using the **web** boilerplate,
in the current directory (used the environment variable $PWD) named
"MyApp" 

`docker run --rm -v "${PWD}:/tmp" jabd/jab web /tmp/MyApp my.app "My App"`

NOTE: -v option should contain a path where you want the **jab** to
      place the output on your host machine. It has to be writable by
      the by Docker.

## References

* [shunit2](https://github.com/kward/shunit2)
* [mjs-mocha](https://github.com/vpotseluyko/mjs-mocha)
* [An example of recursion with Promises](https://gist.github.com/magnetikonline/bfaf2ada33c4922b1a7b0dc876b9aef4)
* [esm](http://2ality.com/2018/12/nodejs-esm-phases.html)
* [Reduce Docker image sizes using Alpine](https://www.sandtable.com/reduce-docker-image-sizes-using-alpine/)
