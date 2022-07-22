const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    'index': path.join(__dirname, "src", 'index.ts')
  },
  output: {
    filename: 'index.dev.js',
    path: path.join(__dirname, "dist", "esm5"),
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.(ts)$/,
      loader: "ts-loader",
      options: {
        configFile: "tsconfig.esm5.json"
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components|build)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env", {
                useBuiltIns: "usage",
              }
            ]
          ],
          "plugins": [
            [
              "@babel/plugin-transform-runtime",
              {
                "helpers": true,
                "corejs": 3,
                "regenerator": true,
                "useESModules": false,
                "absoluteRuntime": false,
              }
            ]
          ]
        }
      },
    },]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
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
    'open',
    'lodash'
  ],
  devtool: 'cheap-module-source-map'
};