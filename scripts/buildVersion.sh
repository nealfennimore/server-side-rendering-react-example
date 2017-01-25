#!/usr/bin/env bash

BASE64_STAMP=$(date +%N | base64)
VALID_STAMP=${BASE64_STAMP//=/} # Remove equal sign

echo "module.exports = '${VALID_STAMP}';" > buildStamp.js