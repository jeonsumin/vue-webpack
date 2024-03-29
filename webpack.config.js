const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "main.js",
        path:path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            }, {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ]
            }, {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: ["*", ".js", ".vue", ".json"],
        alias: {
            '@': path.join(__dirname, "src/")
        }
    },
    devServer: {
        port:3000,
        open: true,
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new VueLoaderPlugin(),
        new dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        new miniCssExtractPlugin()
    ]
};