const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: 'production',
  entry: {
    'index': path.join(__dirname, "src", 'index.ts')
  },
  output: {
    filename: 'index.prod.js',
    path: path.join(__dirname, "dist","esm5"),
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.(ts)$/,
      loader: "ts-loader",
      options: {
        configFile: "tsconfig.esm5.json"
      }
    },{
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