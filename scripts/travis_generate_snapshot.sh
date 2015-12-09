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

if [ "$TRAVIS_REPO_SLUG" == "$PUBLIC_REPO" ]; then
  PATCHES_URL_GITHUB_PREFIX="https://raw.githubusercontent.com/${TRAVIS_REPO_SLUG}/snapshots/${SAFE_BRANCH_NAME}/patches/"
  mkdir -p ${SNYK_TEMP_GH_DIR}/${SAFE_BRANCH_NAME}/patches
  DEBUG=snyk:* ./cli/shrink.js ./data/ ./${SNYK_TEMP_GH_DIR}/${SAFE_BRANCH_NAME}/${SNAPSHOT_FILENAME} --pdir ./${SNYK_TEMP_GH_DIR}/${SAFE_BRANCH_NAME}/patches --prefix ${PATCHES_URL_GITHUB_PREFIX}
else 
   echo "Generate github snapshot only from the PUBLIC_REPO ($PUBLIC_REPO)"
fi	
  

###############################################################
# commit to snapshots branch
###############################################################
git config --global user.name "Travis-CI"
git config --global user.email "noreply@travis-ci.org"
git config --global push.default simple

if [ "$TRAVIS_REPO_SLUG" == "$PUBLIC_REPO" ]; then
  echo "Decrypting deploy key..."
  openssl aes-256-cbc -K $encrypted_2dc3c05eaa30_key -iv $encrypted_2dc3c05eaa30_iv -in misc/deploy-key.enc -out ~/.ssh/id_rsa -d
  chmod 600 ~/.ssh/id_rsa
else 
   echo "Travis should use deploy key only from the PUBLIC_REPO ($PUBLIC_REPO)"
fi	
 
git clone --depth=50 --branch=${SNYK_SNAPSHOTS_BRANCH} git@github.com:${TRAVIS_REPO_SLUG}.git ${SNYK_TEMP_GIT_SNAPSHOTS_DIR}

if [ "$TRAVIS_REPO_SLUG" == "$PUBLIC_REPO" ]; then
  echo Copying from ${SNYK_TEMP_GH_DIR}
  cp -rf ${SNYK_TEMP_GH_DIR}/* ${SNYK_TEMP_GIT_SNAPSHOTS_DIR}/
else 
  echo Copying from ${SNYK_TEMP_S3_DIR}
  cp -rf ${SNYK_TEMP_S3_DIR}/* ${SNYK_TEMP_GIT_SNAPSHOTS_DIR}/
fi	

cd ${SNYK_TEMP_GIT_SNAPSHOTS_DIR}
git add --all
COMMIT_MESSAGE="panda snapshot `date "+%Y-%m-%d %H:%M:%S"` from `git log -n 1 --format='commit %h %s'`"
git commit -m "${COMMIT_MESSAGE}"
git push
cd ..
