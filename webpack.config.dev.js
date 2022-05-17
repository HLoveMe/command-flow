const path = require('path');
const webpack = require("webpack");
console.log("----------------------------------------------------")
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "public", 'index.js'),
  // watch: true,
  output: {
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components|build)/,
      use: {
        loader: "babel-loader",
        options: {
          "plugins": [
            ["@babel/plugin-proposal-optional-chaining"],
          ],
          presets: ["@babel/preset-env"]
        }
      },
    },]
  },
  externals: {
    os: 'os',
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', 'ts', '.tsx'],
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'public'),
  //   },
  //   open: true,
  //   port: 9000,
  //   hot: true,
  // },
  devtool: 'cheap-module-source-map',
};