import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'lodash/merge';

import webpackCommonClientConfig from './common/webpack.common.client.config.js';
import config from '../config';

module.exports = merge({}, webpackCommonClientConfig, {

    output: {
        path: config.paths.PUBLIC
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/), // Use only the en locale from momentjs
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: [
                config.regex.VENDOR_FILES,
                /html\.js$/,
                /styles\.js$/
            ]
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
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

            // App styles with CSS locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                loader: ExtractTextPlugin.extract('style', [
                    `css?modules&importLoaders=3&sourceMap&localIdentName=${config.webpack.cssModuleName}`,
                    'postcss',
                    'resolve-url',
                    'sass?sourceMap'
                ].join('!'))
            },

            // Vendor styles
            {
                test: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                loader: ExtractTextPlugin.extract('style', [
                    'css',
                    'postcss',
                    'resolve-url',
                    'sass'
                ].join('!'))
            },

            // Images
            // {
            //     test: config.regex.IMAGE_FILES,
            //     exclude: config.regex.FONT_FILES,
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