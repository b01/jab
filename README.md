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

A local installation does not make sense as you only need it to
initialize applications.

### Usage

`jab <boilerplate> <app-location> [app-id] [app-name]`

The command above will perform the following:

1. Make a folder (if it does not already exists) or use an existing
   empty one. An error will be thrown otherwise.
2. Fill the folder with the default contents of the chosen boilerplate.

NOTE: The `[app-name]` and `[app-id]` will be used to fill in
      placeholders **\_\_APP_NAME\_\_** and **\_\_APP_ID_NAME\_\_**
      respectively.

| Argument | Description |
| -------- | ----------- |
| `<boilerplate>` | Name of a boilerplate, which can be found [here](https://github.com/b01/jab-boilerplates/) |
| `<app-location>` | Directory path where the application will be output. |
| `[app-id]` | A unique string to identify the application, for example `my.app` |
| `[app-name]` | A human readable name for the application. |

## Built-in Boilerplates

To see a list of available boilerplates: `jab --show`

A boilerplate (in the case of **jab**) is just a directory containing
files and other directories. Currently files can contain 2 placeholders
that will be replaced when an application skeleton is built.

To see an example view the [jab-
boilerplate](https://github.com/b01/jab-boilerplates/) repository.
You're more than welcome to submit a PR to add/reconfigure a
boilerplate. Be aware that this repository holds the default templates
that comes with **jab**.

## Using Docker

If you already have Docker installed and want to avoid installing Node
just to use **jab**, try modifying this command to fit your needs:

```bash
docker run \
  -it -v "<local-dir>:/tmp" \
  jabd/jab \
  <boilerplate> /tmp/<app-location> [app-id] [app-name]
```

It will run **jab** from a docker container and generate the app. Again
it just skips the process of installing Node JS should docker be
available. For example, on Linux/Mac/Windows you could do:

```bash
docker run --rm -v "${PWD}:/tmp" jabd/jab web /tmp/MyApp my.app "My App"
```

This will use the __web__ boilerplate to make the application skeleton
in the docker container at the __/tmp/\<app-folder\>__ location, which
should map to a directory on your hard drive at `<local-dir>`.

To explain further, the environment variable $PWD maps to the current
directory; so running this will make a directory "MyApp" in the same
place direcory where this command is run.

NOTE: -v option should contain a path where you want the **jab** to
      place the output on your host machine. It has to be writable by
      Docker.

## Generated Application ID

When no `[app-id]` is provided by the user, then one will be generated
so that placeholders are not left blank; to prevent generating application
in a broken state.

The convention is to use the path where the application will be placed,
in accordance with the following rules.

**Rules**

* leading and trailing directory separators are removed.
* Inner directory separators are replaced with a period.
* On Windows, drive letters are removed.
* Special directories notations (.|./|/../) are resolved.

### Generated Application ID Examples:

| Path | Generated ID | Explanation |
|---|---|---|
| /projects/myApp/ | projects.myApp | |
| C:\Projects\MyApp | Projects.MyApp | |
| C:\Projects\..\test\MyApp | test.myApp | |

## References

* [shunit2](https://github.com/kward/shunit2)
* [mjs-mocha](https://github.com/vpotseluyko/mjs-mocha)
* [An example of recursion with Promises](https://gist.github.com/magnetikonline/bfaf2ada33c4922b1a7b0dc876b9aef4)
* [esm](http://2ality.com/2018/12/nodejs-esm-phases.html)
* [Reduce Docker image sizes using Alpine](https://www.sandtable.com/reduce-docker-image-sizes-using-alpine/)
* [Submodules of git dependencies are not fetched #1488](https://github.com/yarnpkg/yarn/issues/1488)
* [How to change the remote repository for a git submodule?](https://stackoverflow.com/questions/913701/how-to-change-the-remote-repository-for-a-git-submodule)
