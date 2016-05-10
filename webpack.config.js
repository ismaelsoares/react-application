var webpack = require ('webpack');
var path = require('path');
var WebpackHtmlPlugin = require('webpack-html-plugin');
var WebpackHtmlConfig = new WebpackHtmlPlugin({
  template: './src/index.html',
  inject: 'body',
  filename: 'index.html'
});
module.exports = {
  entry: './src/index.js',
  context: __dirname,
  devServer:{
    outputPath:'./dist'
  },
  output:{
    path: "./build",
    filename: "bundle.js"

  },
  resolve:{
    extensions:['', '.js', '.jsx']
  },
  module:{
    loaders:[{
      test: /\.js$|\.jsx$/,
      exclude: './node_modules',
      loader: 'babel-loader'
    }]
  },
  plugins: [WebpackHtmlConfig]
};
