'use strict';

var path = require('path');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

var CommonConfig = require('./webpack.common.js');
var context = path.resolve(__dirname, './');
var cssExtractor = new ExtractTextPlugin({
  filename: 'styles.[contenthash].css',
  allChunks: true
});

module.exports = Merge(CommonConfig, {
  devtool: 'source-map',
  entry: {
    app: ['normalize.css', path.resolve(context, './index')]
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: cssExtractor.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            module: true,
            sourceMap: true,
            localIdentName: '[hash:base64:5]'
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
      })
    }]
  },
  plugins: [new CleanWebpackPlugin(['dist']), cssExtractor, new ManifestPlugin(), new ReactLoadablePlugin({
    filename: path.resolve(context, '../../dist/react-loadable.json')
  })]
});