
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    'index': path.join(__dirname, "src", 'index.ts'),
    'index.min': path.join(__dirname, "src", 'index.ts'),
  },
  watch: false,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "cjs"),
    // commonjs/2 暴露给commonjs模块  amd 暴露给amd模块。umd 暴露给所有模块
    // commonjs和commonjs2几乎相同，只不过commonjs只包含exports，而commonjs2还包含module.exports，所以直接使用commonjs2即可
    libraryTarget: 'umd',
    // libraryExport: "default",// 只导出 default
    library: 'createSafe' // amd umd 需要指定 值为你的库的名称 会
  },
  module: {
    rules: [
      {
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
  },
  plugins: [],
  resolve: {
    extensions: ['.json', '.js', '.jsx','.ts','.tsx'],
  },
  // devtool: 'cheap-module-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js/
      })
    ]
  }
};