const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: 'production',
  entry: {
    'index': path.join(__dirname, "source", 'web', 'index.js')
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, "dist","esm-browser"),
    libraryTarget: 'umd',
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
            [
              "@babel/plugin-transform-runtime",
              {
                "helpers": false,
                "corejs": false,
                "regenerator": true,
                "useESModules": false,
                "absoluteRuntime": false,
              }
            ]
          ],
          presets: [
            [
              "@babel/preset-env", {}
            ]
          ]
        }
      },
    },]
  },
  plugins: [],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  externals: [
    'axios',
    'rxjs',
    'rxjs/operators',
    'js-base64',
    'qrcode',
    'qrcode-generator',
    'uuid',
    'open'
  ],
};