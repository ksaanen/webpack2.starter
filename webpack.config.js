module.exports = {
  entry: './src/app.ts',
  output: {
    path: __dirname + '/build/js',
    filename: 'bundle.js'
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
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + '/wwwroot',
    port: 9000
  }
}
