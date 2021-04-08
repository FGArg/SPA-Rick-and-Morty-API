const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/template.html',
        filename: './index.html'
      }
    ),
    new CopyWebpackPlugin({
      patterns: [
        { 
        from: './src/styles/styles.css',
        to: 'styles' 
        },
        { 
          from: './src/assets/images',
          to: 'assets/images' 
        },
      ]
    })
  ]
}