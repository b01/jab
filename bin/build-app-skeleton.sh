#! /bin/sh

set -e

DIR=$( cd "$( dirname "$0" )" && pwd )
APP_NAME="${1}"
APP_PATH="${2}"
APP_ID=$(basename "${2}")
#APP_FILES=$(ls "${APP_PATH}" >null 2>null)

if [ -z "${APP_NAME}" ]; then
    echo "Missing app name."
    exit 1
fi

if [ -z "${APP_PATH}" ]; then
    echo "Missing app destination path."
    exit 1
fi

# Stop with error if the directory exist AND has files.
if [ -d "${APP_PATH}" ]; then
    hasFiles=$(ls "${APP_PATH}")

    if [ -n "${hasFiles}" ]; then
        echo "Bad destination path. The and has files"
        exit 1
    fi
fi

# 1. Find requested boilerplate.
BOILER_PLATE="${DIR}/../boilerplate-01"

# 2. Copy the boilerplate into the desired location.
. "${DIR}"/copy-boilerplate.sh "${BOILER_PLATE}" "${APP_PATH}"

# 3. Fill in all placeholders in the boilerplate.
. "${DIR}"/replace-name.sh "${APP_NAME}" "${APP_PATH}" "${APP_ID}"
