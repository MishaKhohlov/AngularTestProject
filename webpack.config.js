var webpack = require("webpack");

module.exports = {
  entry: './build/app/app.js',
  output: {path: __dirname, filename: 'bundle.js'},
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {
        test: /.js?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};