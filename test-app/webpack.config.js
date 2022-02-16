const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');
const webpack = require("webpack");
const {
  ModuleFederationPlugin,
} = require('webpack').container;

module.exports = {
  mode:'development',
  cache: false,
  devtool: 'source-map',
  optimization: {
    splitChunks: false
  },
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    publicPath: "auto",
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'output'),
  },
  resolve: {
    extensions: ['.vue', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          },
        },
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: 'test',
      filename: 'remoteEntry.js',
      remotes: {
        'productStore': 'productStore@http://127.0.0.1:8000/remoteEntry.js',
        'productFetching': 'productFetching@http://127.0.0.1:8002/remoteEntry.js',
        'productListing': 'productListing@http://127.0.0.1:8001/remoteEntry.js'
      }
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8003,
    open: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
}