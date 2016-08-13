let webpack = require("webpack");
let ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

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
    new ngAnnotatePlugin({add: true}),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
