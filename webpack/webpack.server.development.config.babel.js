import webpack from 'webpack';
import merge from 'lodash/merge';
import path from 'path';

import webpackCommonServerConfig from './common/webpack.common.server.config.js';
import config from '../config';

module.exports = merge({}, webpackCommonServerConfig, {
    entry: './development.server.js',

    output: {
        filename: 'development.server.bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                NODE_BUILD: JSON.stringify('server'),
                NODE_TLS_REJECT_UNAUTHORIZED: JSON.stringify('0')
            }
        })
    ],

    watchOptions: {
        aggregateTimeout: 10000
    }
});
