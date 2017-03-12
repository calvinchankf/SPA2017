const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");

const DEBUG = process.env.NODE_ENV == 'development';

// extract sass into a separate bundle
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  allChunks: true
});

// split libs in a separate chunk
const commonChunk = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: Infinity,
  filename: '[name].[hash].js',
});

// all chunks are with hash filenames so we need a plugin to dynamically inject the bundles in the template html
const htmlWebpack =  new HtmlWebpackPlugin({
  template: path.join(__dirname, '../src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

// will be used in both dev & prod
const baseConfig = {
  entry: {
    app: path.join(__dirname, '../src/'),
    vendor: ['react', 'react-dom', 'react-router', 'redux' , 'react-redux', 'redux-thunk'],
  },
  output: {
    path: path.join(__dirname, '../build/'),
    filename: '[name].[hash].js', // name of entry files e.g. app, vender
    chunkFilename: "routes.[chunkhash].chunk.js", // name of non-entry files e.g. routes
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, // for all js files
        exclude: /node_modules/, // except js files /node_modules
        loader: 'babel-loader', // preprocess with babel loader
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
}

// merge config for dev
const developConfig = Object.assign({}, baseConfig, {
  plugins: [
    extractSass,
    commonChunk,
    htmlWebpack
  ]
});

// merge config for prod
const productionConfig = Object.assign({}, baseConfig, {
  plugins: [
    extractSass,
    commonChunk,
    htmlWebpack,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        'screw_ie8': true,
        'warnings': false,
        'unused': true,
        'dead_code': true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});

module.exports = DEBUG ? developConfig : productionConfig;
