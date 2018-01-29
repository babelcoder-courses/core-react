'use strict';

var path = require('path');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');

var context = path.resolve(__dirname, './');

module.exports = Merge(CommonConfig, {
  devtool: 'eval-source-map',
  entry: {
    app: ['react-hot-loader/patch', 'normalize.css', path.resolve(context, './index')]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'eslint-loader'
    }, {
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          module: true,
          sourceMap: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: 'public',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});