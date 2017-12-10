const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const customLoader = require("custom-loader");

module.exports = {
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './src/index.js'],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    devServer: {
        port: 3300,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader?name=images/[name].[hash:6].[ext]',
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.json$/,
                use:[
                    {
                        loader: 'json-loader',
                    },
                    {
                        loader: 'my-loader'
                    }
                ],
            }

        ]
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
};