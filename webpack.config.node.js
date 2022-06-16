const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: {
    'index': path.join(__dirname, "source", 'node', 'index.js')
  },
  target:'node',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, "dist",""),
    libraryTarget: 'commonjs2',
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
  externals: [
    'axios',
    'rxjs',
    'rxjs/operators',
    'js-base64',
    'qrcode',
    'qrcode-generator',
    'uuid',
    'open'
  ]
};