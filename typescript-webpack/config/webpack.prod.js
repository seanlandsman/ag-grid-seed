// config/webpack.prod.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: './src/SimpleGrid.ts',

    output: {
        path: path.resolve('dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
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
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({}),

        new ExtractTextPlugin({filename: '[name].css'}),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'app'
        }),

        new HtmlWebpackPlugin({
            template: 'config/index.html'
        })
    ]
};
