// config/webpack.dev.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: './src/SimpleGrid.ts',

    output: {
        path: path.resolve('dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: [ 'css-loader?sourceMap=true', 'sass-loader?sourceMap=true' ]})
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: 'url-loader' },
                    { loader: require.resolve('ag-grid/src/styles/svg-loader') }
                ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({filename: '[name].css'}),

        new HtmlWebpackPlugin({
            template: 'config/index.html'
        })
    ]
};

