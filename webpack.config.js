const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = (nodeEnv === 'production');
const libraryName = process.env.npm_package_name;

const config = {
  mode: nodeEnv,
  context: path.resolve(__dirname, 'src'),
  entry: "./entries/dist.js",
  devtool:  isProd ? 'source-map' : 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${libraryName}.js`,
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue' ],
    alias: {
        'vue': '@vue/runtime-dom'
    },
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'expanded',
                sourceMapContents: true
              },
            }
          }
        ],
      },
      {
        test: /\.svg$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${libraryName}.css`
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

module.exports = config;