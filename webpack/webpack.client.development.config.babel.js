import webpack from 'webpack';
import merge from 'lodash/merge';

import webpackCommonClientConfig from './common/webpack.common.client.config.js';
import config from '../config';

module.exports = merge({}, webpackCommonClientConfig, {
    output: {
        path: config.paths.DEV,
        pathinfo: true,
        publicPath: '/' // https://github.com/coryhouse/react-slingshot/issues/75#issuecomment-198787201
    },
    devtool: 'eval',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    module: {
        loaders: [

            // Javascript
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },

            // HTML
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },

            // CSS Locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                loaders: [
                    'style',
                    `css?modules&importLoaders=3&sourceMap&localIdentName=${config.webpack.cssModuleName}`,
                    'postcss',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            },

            // CSS Globals
            {
                test: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                loaders: [
                    'style',
                    'css',
                    'postcss',
                    'resolve-url',
                    'sass'
                ]
            },

            // Images
            // {
            //     test: config.regex.IMAGE_FILES,
            //     exclude: [config.regex.FONT_FILES, config.regex.PROJECT_IMAGE_FILES],
            //     loaders: [
            //         'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
            //         'image-webpack'
            //     ]
            // },

            {
                test: config.regex.PROJECT_IMAGE_FILES,
                exclude: [config.regex.FONT_FILES],
                loaders: [
                    // 'file?hash=sha512&digest=hex&name=images/projects/[hash].[ext]',
                    // 'image-webpack',
                    'responsive'
                ]
            },

            // Fonts
            {
                test: config.regex.FONT_FILES,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }
});