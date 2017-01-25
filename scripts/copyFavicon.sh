#!/usr/bin/env bash

if [[ $ENVIRONMENT == 'production' && -f $APP_ROOT_DIR/client/images/favicon.ico ]]; then
    cp $APP_ROOT_DIR/client/images/favicon.ico $APP_ROOT_DIR/$APP_ASSET_DIR/
fi