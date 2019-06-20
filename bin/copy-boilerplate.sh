#! /bin/sh

set -e

if [ -z "${1}" ] || [ -z "${2}" ]; then
    echo "Missing source or destination directory, or both."
    exit 1
fi

DIR=$( cd "$( dirname "$0" )" && pwd )

APP_PARENT_DIR=$(dirname "${2}")


if [ ! -d "${APP_PARENT_DIR}" ]; then
    echo "going to make directory: ${APP_PARENT_DIR}"
    mkdir -p "${APP_PARENT_DIR}"
fi

echo "going to copy boiler plate from ${1} to ${2}"
cp -R "${1}" "${2}"
