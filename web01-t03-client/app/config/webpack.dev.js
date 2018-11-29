const webpack = require("webpack");
const config = require("./webpack.config");
const merge  = require("webpack-merge");
const path   = require("path");

module.exports = merge(config, {
  mode        : "development",
  watch       : true,
  watchOptions: {
    ignored: path.resolve("node_modules")
  },
  devtool  : "cheap-eval-source-map",
  devServer: {
    hot     : true,
    index   : "index.html",
    compress: true,
    open    : true
  },
  module: {
    rules: [ {
      test: /\.scss$/,
      use : [ "style-loader", "css-loader", "sass-loader" ]
    }, {
      test: /\.css$/,
      use : [ "style-loader", "css-loader" ]
    } ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});