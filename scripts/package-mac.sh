#!/usr/bin/env sh

npx electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/macos/icon.icns --prune=true --out=release-builds
