const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VuetifyLoaderPlugin } = require('vuetify-loader');

module.exports = {
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'vuetify-loader',
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()],
};
