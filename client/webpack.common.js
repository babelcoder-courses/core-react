const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const context = path.resolve(__dirname, 'src')

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Lib: path.resolve(context, 'lib'),
      Features: path.resolve(context, 'features'),
      Theme: path.resolve(context, 'theme')
    },
    extensions: [".js", ".json", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.ejs' }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
