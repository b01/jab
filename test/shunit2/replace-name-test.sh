#! /bin/sh
# file: test/shunit2/replace-name_test.sh

DIR=$( cd "$( dirname "$0" )" && pwd )
FIXTURES_DIR="${DIR}/fixtures"
BLAST_DIR="${DIR}/tmp"
FIXTURE_APP="${BLAST_DIR}/replace-me-test"

testPlaceholdersFillIn() {
  result=`${DIR}/../../bin/replace-name.sh "Test APP Name" "${FIXTURE_APP}" "testAPPId"`

  actual=$(grep -rn "__APP_NAME__" ${FIXTURE_APP})
  assertEquals \
    'Failed to update placeholder APP_NAME' \
    "" "${actual}"

  actual=$(grep -rn "__APP_ID_NAME__" ${FIXTURE_APP})
  assertEquals \
    'Failed to update placeholder APP_ID_NAME' \
    "" "${actual}"

  actual=$(grep -rn "Test APP Name" ${FIXTURE_APP})
  assertTrue \
    'Failed to find the replaced app name' \
    "[ -n ${actual} ]"

  actual=$(grep -rn "testAPPId" ${FIXTURE_APP})
  assertTrue \
   'Failed to find the replaced app ID name' \
    "[ -n ${actual} ]"
}

oneTimeSetUp() {
  cp -R "${FIXTURES_DIR}/boilerplate-01" "${FIXTURE_APP}"
}

tearDown() {
  rm -rf "${FIXTURE_APP}"
}

# Load and run shUnit2.
. /opt/shunit2-2.1.7/shunit2
