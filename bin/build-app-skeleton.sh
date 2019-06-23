#! /bin/sh

set -e

DIR=$( cd "$( dirname "$0" )" && pwd )
BOILER_PLATE="${1}"
APP_NAME="${2}"
APP_PATH="${3}"
APP_ID=$(basename "${APP_PATH}")

if [ -z "${BOILER_PLATE}" ]; then
    echo "Error: Missing boilerplate argument."
    exit 1
fi

if [ -z "${APP_NAME}" ]; then
    echo "Error: Missing app name."
    exit 1
fi

if [ -z "${APP_PATH}" ]; then
    echo "Missing app destination path."
    exit 1
fi

BOILER_PLATE_PATH=$( cd "${DIR}/../boilerplates/" && pwd)

# Stop with error if the directory exist AND has files.
if [ -d "${APP_PATH}" ]; then
    hasFiles=$(ls "${APP_PATH}")

    if [ -n "${hasFiles}" ]; then
        echo "Error: The destination path has files."
        exit 1
    fi
fi

# 1. Copy the boilerplate into the desired location.
. "${DIR}"/copy-boilerplate.sh \
  "${BOILER_PLATE_PATH}/${BOILER_PLATE}" "${APP_PATH}"

# 2. Fill in all placeholders in the boilerplate.
. "${DIR}"/replace-name.sh \
  "${APP_NAME}" "${APP_PATH}" "${APP_ID}"
