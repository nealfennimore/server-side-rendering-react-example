import merge from 'lodash/merge';
import autoprefixer from 'autoprefixer';

import webpackCommon from './webpack.common.config.js';
import config from '../../config';

module.exports = merge({}, webpackCommon, {
    name: 'client',
    target: 'web',
    context: config.paths.CLIENT,

    entry: {
        app: [
            './app'
        ],

        fonts: [
            './fonts/style.scss'
        ],

        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'bluebird',
            'superagent',
            'serialize-javascript',
            'moment',
            './scss/vendor/vendor.scss',
            './lib/highlight.js'
        ]
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        path: null
    },

    plugins: null,

    postcss: function () {
        return [autoprefixer];
    },
    imageWebpackLoader: {
        pngquant: {
            quality: '65-90',
            speed: 4
        },
        svgo: {
            plugins: [{
                removeViewBox: false
            }, {
                removeEmptyAttrs: false
            }]
        }
    }
});