'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var context = path.resolve(__dirname, './');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          module: true,
          sourceMap: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }]
    }]
  },
  resolve: {
    alias: {
      Lib: path.resolve(context, '../shared/lib'),
      Features: path.resolve(context, '../shared/features'),
      Theme: path.resolve(context, '../shared/theme')
    },
    extensions: ['.js', '.json', '.scss']
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.ejs' }), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function minChunks(module) {
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }), new webpack.optimize.CommonsChunkPlugin({
    name: 'app',
    async: true
  }), new webpack.optimize.ModuleConcatenationPlugin(), new webpack.DefinePlugin({
    'process.env.HOST_URL': JSON.stringify(process.env.HOST_URL)
  })]
};