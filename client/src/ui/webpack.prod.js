const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ReactLoadablePlugin = require('react-loadable/webpack')
  .ReactLoadablePlugin

const CommonConfig = require('./webpack.common.js')
const context = path.resolve(__dirname, './')
const cssExtractor = new ExtractTextPlugin({
  filename: 'styles.[contenthash].css',
  allChunks: true
})

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
    rules: [
      {
        test: /\.scss$/,
        use: cssExtractor.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                module: true,
                sourceMap: true,
                localIdentName: '[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    cssExtractor,
    new ManifestPlugin(),
    new ReactLoadablePlugin({
      filename: path.resolve(context, '../../dist/react-loadable.json')
    })
  ]
})
