#!/usr/bin/sh

#APP_NAME=NAME.app
#SIGNATURE=8WQT3YBB5A

if "$APP_NAME"=""; then
  echo "Please set the APP_NAME environment variable"
  exit -1
fi

if "$SIGNATURE"=""; then
  echo "Please set the SIGNSTURE environment variable"
  exit -1
fi

codesign --deep --force --verbose \
    --sign "$SIGNATURE" \
    "release-builds/$APP_NAME"
