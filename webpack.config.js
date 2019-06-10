const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'vue-fab.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: "vue-loader"
    }, {
      test: /\.js$/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: 'style!css!autoprefixer'
    }, {
      test: /\.less$/,
      use: 'style!less'
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        {
          use: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            appendTsxSuffixTo: [/\.vue$/]
          }
        }
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJsPlugin({
      compress: {
        drop_console: true,
      },
      uglifyOptions: {
        warnings: false
      }
    })
  ]
}