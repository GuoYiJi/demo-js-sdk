
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const modName = 'tcb';

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  output: {
    path: path.resolve(__dirname, 'webpack'),
    filename: `sdk.js`,
    library: 'sdk',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof window !== "undefined"?window:this'
  },

  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  devServer: {
    port: 8082,
    publicPath: '/webpack/',
  }
}