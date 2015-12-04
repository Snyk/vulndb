#!/bin/bash
echo "Travis generate snapshot build script"

function sanitize-branch {
  local  __resultvar=$1
  __resultvar=${__resultvar/\//-/}
  __resultvar=${__resultvar//[^a-zA-Z0-9_\-]/}
  echo -n $__resultvar
}

SAFE_BRANCH_NAME=`sanitize-branch ${TRAVIS_BRANCH}`
PATCHES_URL_S3_PREFIX="https://s3.amazonaws.com/${ARTIFACTS_S3_BUCKET}/${ARTIFACTS_S3_UPLOAD_DIR}/${SAFE_BRANCH_NAME}/patches/"
mkdir -p ${SNYK_TEMP_S3_DIR}/${SAFE_BRANCH_NAME}/patches

DEBUG=snyk:* ./cli/shrink.js ./data/ ./${SNYK_TEMP_S3_DIR}/${SAFE_BRANCH_NAME}/${SNAPSHOT_FILENAME} --pdir ./${SNYK_TEMP_S3_DIR}/${SAFE_BRANCH_NAME}/patches --prefix ${PATCHES_URL_S3_PREFIX}

###############################################################
# commit to snapshots branch
###############################################################
git config --global user.name "Travis-CI"
git config --global user.email "noreply@travis-ci.org"
git config --global push.default simple

git clone --depth=50 --branch=${SNYK_SNAPSHOTS_BRANCH} https://${CI_USER_TOKEN}@github.com/${TRAVIS_REPO_SLUG} ${SNYK_TEMP_GIT_SNAPSHOTS_DIR}

cp -rf ${SNYK_TEMP_S3_DIR}/* ${SNYK_TEMP_GIT_SNAPSHOTS_DIR}/
cd ${SNYK_TEMP_GIT_SNAPSHOTS_DIR}
git add --all
COMMIT_MESSAGE="panda snapshot `date "+%Y-%m-%d %H:%M:%S"` from `git log -n 1 --format='commit %h %s'`"
git commit -m "${COMMIT_MESSAGE}"
git push
cd ..
