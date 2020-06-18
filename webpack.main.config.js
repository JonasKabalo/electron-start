'use strict';

process.env.BABEL_ENV = `main-${process.env.NODE_ENV}`;
const isProductionBuild = process.env.NODE_ENV === 'production';

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const staticFolder = isProductionBuild ?
  path.join(__dirname, '/static') :
  path.join(__dirname, './static');

let mainConfig = {
  entry: {
    main: path.join(__dirname, './src/main/index.js')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
    ]
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, './.webpack')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.__static': ['\'', staticFolder.replace(/\\/g, '\\\\'), '\''].join(''),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  target: 'electron-main'
}

module.exports = mainConfig
