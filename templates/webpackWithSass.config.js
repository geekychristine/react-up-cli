const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    main: ['babel-polyfill', './$srcDirectory/$entry']
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '$distDirectory'),
    compress: true,
    disableHostCheck: true,
    host: 'localhost',
    hot: true,
    open: true,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  node: {
    dns: 'empty',
    global: true,
    fs: 'empty',
    net: 'empty',
    process: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['$distDirectory'], {
      verbose: false
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: '$name',
      template: './$srcDirectory/index.html'
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve('./$srcDirectory'), path.resolve('./node_modules')]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '$distDirectory')
  }
};
