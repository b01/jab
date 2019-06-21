#! /bin/sh
# file: test/shunit2/build-app-skeleton_test.sh

DIR=$( cd "$( dirname "$0" )" && pwd )
FIXTURES_DIR="${DIR}/fixtures"
BLAST_DIR="${DIR}/tmp"
FIXTURE_APP="${BLAST_DIR}/build-app-skeleton-test"

testAppSkeletonMade() {
  result=`${DIR}/../../bin/build-app-skeleton.sh "web" "jab test" "${FIXTURE_APP}"`

  assertTrue \
      "the app skeleton was not made" \
      "[ -d ${FIXTURE_APP} ]"

  actual=$(grep -rn "__APP_ID_NAME__" ${FIXTURE_APP})
  assertEquals \
    'Failed to update placeholer APP_NAME' \
    "" "${actual}"
}

tearDown() {
  rm -rf "${BLAST_DIR}/app"
}

# Load and run shUnit2.
. /opt/shunit2-2.1.7/shunit2