#!/bin/bash
echo "Travis generate snapshot build script"

if [ "$TRAVIS_PULL_REQUEST" == "true" ]; then
  echo "Pull request do nothing..."
  exit 0
fi

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
COMMIT_MESSAGE="snyk vulndb snapshot `date "+%Y-%m-%d %H:%M:%S"`"
git commit -m "${COMMIT_MESSAGE}"
git push
cd ..


if [ "$TRAVIS_REPO_SLUG" == "$PUBLIC_REPO" ]; then
  if ([ "$TRAVIS_BRANCH" == "master" ] && [ "$TRIGGER_PROD_NOTIFICATIONS" == "true" ]); then
    echo Purging prod
    curl -H "Content-Type: application/json" -H "Authorization:token ${SNYK_PROD_AUTH_TOKEN}" -X PUT ${SNYK_PROD_PURGE_URL}
    echo Trigerring notifications on prod
    # curl -H "Content-Type: application/json" -H "Authorization:token ${SNYK_PROD_AUTH_TOKEN}" -X POST ${SNYK_PROD_NOTIFICATION_URL} -d '{"dryRun": false, "store": true}'
    curl -H "Content-Type: application/json" -H "Authorization:token ${SNYK_PROD_AUTH_TOKEN}" -X POST ${SNYK_PROD_NOTIFICATION_URL} -d '{"emailAddress": "${SNYK_DEV_TEST_EMAIL}", "dryRun": true, "store": false}'
  else 
    echo Trigger notifications disabled on prod, or not a master branch
  fi

else 
  echo Purging dev
  curl -H "Content-Type: application/json" -H "Authorization:token ${SNYK_DEV_AUTH_TOKEN}" -X PUT ${SNYK_DEV_PURGE_URL}
  if [ "$TRIGGER_DEV_NOTIFICATIONS" == "true" ]; then
    echo Trigerring notifications on dev
    curl -H "Content-Type: application/json" -H "Authorization:token ${SNYK_DEV_AUTH_TOKEN}" -X POST ${SNYK_DEV_NOTIFICATION_URL} -d '{"emailAddress": "${SNYK_DEV_TEST_EMAIL}", "dryRun": true, "store": false}'
  else 
    echo Trigger notifications disabled on dev
  fi
fi	



