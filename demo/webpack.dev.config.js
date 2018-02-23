const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname + '/main.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'vue-fab.js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.less$/,
      loader: 'style!less'
    }]
  },
  devServer: {
    inline: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    })
  ]
}