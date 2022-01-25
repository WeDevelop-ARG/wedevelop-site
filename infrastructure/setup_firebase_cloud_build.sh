#!/bin/sh

if [ -z $1 ]; then
  echo "Usage: ./setup_firebase_cloud_build.sh <env-name>"
  exit 1
fi

if [ "$1" = "production" ]; then
  PROJECT_ID=wedevelop-site
else
  PROJECT_ID=wedevelop-site-$1
fi

rm -rf cloud-builders-community/ &&
git clone https://github.com/GoogleCloudPlatform/cloud-builders-community.git && \
cd cloud-builders-community/firebase && \
gcloud builds submit --project $PROJECT_ID . && \
cd ../.. &&
rm -rf cloud-builders-community/
