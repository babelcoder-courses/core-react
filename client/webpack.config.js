const path = require('path')
const webpack = require('webpack')

const context = path.resolve(__dirname, 'src')
const cssModuleRules = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      module: true,
      sourceMap: true,
      localIdentName: '[path][name]__[local]--[hash:base64:5]'
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
]

module.exports = {
  devtool: 'eval-source-map',
  context,
  entry: {
    app: [
      'react-hot-loader/patch',
      'normalize.css',
      './index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      Lib: path.resolve(context, 'lib'),
      Features: path.resolve(context, 'features'),
      Theme: path.resolve(context, 'theme')
    },
    extensions: [".js", ".json", ".scss"]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: cssModuleRules },
      {
        test: /\.scss$/,
        use: [
          ...cssModuleRules,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
}
