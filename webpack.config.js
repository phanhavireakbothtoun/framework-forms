const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  mode: 'production',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname),
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'home.html',
  })],
  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader?interpolate'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
};
