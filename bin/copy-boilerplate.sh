#! /bin/sh

set -e

DIR=$( cd "$( dirname "$0" )" && pwd )
BOILER_PLATE_PATH="${1}"
APP_PATH="${2}"
APP_PARENT_DIR=$(dirname "${APP_PATH}")

if [ ! -d "${BOILER_PLATE_PATH}" ]; then
    name=$(basename "${BOILER_PLATE_PATH}")
    echo "Could not find boilerplate ${name}."
    exit 1
fi

if [ -z "${APP_PATH}" ]; then
    echo "Missing destination directory."
    exit 1
fi

if [ ! -d "${APP_PARENT_DIR}" ]; then
    echo "going to make directory: ${APP_PARENT_DIR}"
    mkdir -p "${APP_PARENT_DIR}"
fi

echo "going to copy boilerplate from ${1} to ${2}"
cp -R "${BOILER_PLATE_PATH}" "${APP_PATH}"
