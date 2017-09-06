var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.ts',
  output: {
    path: __dirname + '/wwwroot/scripts',
    filename: 'app.js'
  },
  module: {
     rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map'
}
