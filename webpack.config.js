var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "h5p-feedback.css"
});


const config = {
  entry: "./src/entries/dist.js",
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "h5p-feedback.js",
    sourceMapFilename: '[file].map'
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader?sourceMap"
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true"
            }
          ],

          fallback: "style-loader"
        })
      },
      {
        test: /\.svg$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'url-loader?limit=10000'
      } // inline base64 URLs for <=10k images, direct URLs for the rest
    ]
  },
  plugins: [
    extractSass
  ]
};

module.exports = config;