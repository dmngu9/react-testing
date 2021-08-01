const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: { import: './src/index.tsx', dependOn: ['vendors'] },
    vendors: ['react', 'react-dom', 'react-router-dom', 'styled-components']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[name][hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_module/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.svg/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  context: __dirname,
  target: 'web',
  mode: 'production',
  devtool: 'inline-cheap-source-map'
};