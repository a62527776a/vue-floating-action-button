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
      loader: [
        'babel-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.less$/,
      loader: 'style!less'
    }, {
      test: /\.vue$/,
      enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
      include: /src/  // src文件夹下的文件需要被lint
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