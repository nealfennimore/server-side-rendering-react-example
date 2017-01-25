import merge from 'lodash/merge';
import path from 'path';

import webpackCommonServerConfig from './common/webpack.common.server.config.js';
import config from '../config';

module.exports = merge({}, webpackCommonServerConfig, {
    entry: './production.server.js',

    output: {
        filename: 'production.server.bundle.js'
    }
});