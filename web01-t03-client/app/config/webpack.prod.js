const webpack              = require( "webpack" );
const config               = require( "./webpack.config" );
const merge                = require( "webpack-merge" );
const path                 = require( "path" );
const UglifyJSPlugin       = require( "uglifyjs-webpack-plugin" );
const HtmlWebpackPlugin    = require( "html-webpack-plugin" );
const MiniCSSExtractPlugin = require( "mini-css-extract-plugin" );
const CleanWebpackPlugin   = require( "clean-webpack-plugin" );

module.exports = merge( config, {
  mode  : "production",
  output: {
    filename: "[name].[hash].js"
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin( {
        cache    : true,
        parallel : true,
        sourceMap: true
      } )
    ]
  },
  module: {
    rules: [ {
      test: /\.scss$/,
      use : [ {
        loader: MiniCSSExtractPlugin.loader
      }, {
        loader : "css-loader",
        options: {
          importLoaders: 3
        }
      }, {
        loader: "csso-loader"
      }, {
        loader: "postcss-loader"
      }, {
        loader: "sass-loader"
      } ]
    }, {
      test: /\.css$/,
      use : [ {
        loader: MiniCSSExtractPlugin.loader
      }, {
        loader : "css-loader",
        options: {
          importLoaders: 2
        }
      }, {
        loader: "csso-loader"
      }, {
        loader: "postcss-loader"
      } ]
    } ]
  },
  plugins: [
    new CleanWebpackPlugin( [ "dist" ], {
      root: path.resolve( '.' )
    } ),
    new HtmlWebpackPlugin( {
      template: "./404.html",
      filename: "./404.html",
      inject: false
    } ),
    new MiniCSSExtractPlugin( {
      filename: "static/style/[name].[hash].css",
    } )
  ]
} );
