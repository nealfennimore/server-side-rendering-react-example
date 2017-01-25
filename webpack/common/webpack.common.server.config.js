import webpack from 'webpack';
import merge from 'lodash/merge';

import webpackCommon from './webpack.common.config.js';
import config from '../../config';

module.exports = merge({}, webpackCommon, {
    target: 'node',
    name: 'server',
    node: {
        __dirname: true // superagent fix: https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack
    },
    context: config.paths.SERVER,

    entry: null,
    output: {
        path: config.paths.SERVER + '/build',
        filename: null
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/), // Use only the en locale from momentjs
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        }),
        new webpack.DefinePlugin({ 'global.GENTLY': false }) // superagent fix: https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loader: `css-loader/locals?modules&importLoaders=1&localIdentName=${config.webpack.cssModuleName}`
            },
            {
                test: config.regex.PROJECT_IMAGE_FILES,
                exclude: [config.regex.FONT_FILES],
                loaders: [
                    'responsive'
                ]
            }
        ]
    },
    responsiveLoader: {
        pass: true // Disable responsive loader on server
    },
});