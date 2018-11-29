const path              = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve("app"),
  resolve: {
    extensions: [ ".js", ".jsx", ".json" ]
  },
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "[name].js"
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.(woff2|woff|eot|ttf|svg)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "static/fonts/[name].[ext]"
        }
      }
    } ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
}