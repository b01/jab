#! /bin/sh

set -e

if [ -z "${1}" ] || [ -z "${2}" ] || [ -z "${3}" ]; then
    echo "Missing app name, app id name, or app path."
    exit 1
fi

DIR=$( cd "$( dirname "$0" )" && pwd )

echo "Updating placeholder __APP_NAME__ with ${1} in ${2}"

grep -rl '__APP_NAME__' "${2}" | xargs sed -i -e "s/__APP_NAME__/${1}/g"

echo "Updating placeholder __APP_ID_NAME__ with ${3} in ${2}"

grep -rl '__APP_ID_NAME__' "${2}" | xargs sed -i -e "s/__APP_ID_NAME__/${3}/g"
