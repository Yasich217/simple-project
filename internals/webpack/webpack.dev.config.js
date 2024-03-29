const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    templateContent: templateContent(),
  })
];

module.exports = require('./webpack.shared.config')({
  // Add hot reloading in development
  entry: [
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'development/src/index.js'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  resolve: {
    modules: ['app', 'src', 'node_modules'],
    alias: {
      'src': path.join(process.cwd(), 'src')
    }
  },

  plugins: plugins,

  babelQuery: {
    presets: ['react-hmre'],
  },

  devtool: 'cheap-module-eval-source-map'
});

function templateContent() {
  return fs.readFileSync(
    path.resolve(process.cwd(), 'development/src/index.html')
  ).toString();
}
