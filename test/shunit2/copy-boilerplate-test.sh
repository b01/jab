#! /bin/sh
# file: test/shunit2/copy-boilerplate-test.sh

DIR=$( cd "$( dirname "$0" )" && pwd )
FIXTURES_DIR="${DIR}/fixtures"
BLAST_DIR="${DIR}/tmp"
FIXTURE_APP="${BLAST_DIR}/copy-boilerplate-test"

testPlaceholdersFillIn() {
  result=`${DIR}/../../bin/copy-boilerplate.sh "${FIXTURES_DIR}/boilerplate-01" "${FIXTURE_APP}"`

  actual=$(grep -rn "testAPPId" ${FIXTURE_APP})
  assertTrue \
   'Failed to copy boilerplate to the destination' \
    "[ -d ${FIXTURE_APP} ]"
}

tearDown() {
  rm -rf "${FIXTURE_APP}"
}

# Load and run shUnit2.
. /opt/shunit2-2.1.7/shunit2
