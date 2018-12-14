const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  entry: {
    main: path.resolve(__dirname + '/src/index.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'vue-fab.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.resolve(__dirname + '/src')
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.less$/,
      loader: 'style!less'
    }]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false
      }
    })
  ]
}