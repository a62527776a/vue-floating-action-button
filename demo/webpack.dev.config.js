const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname + '/main.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'vue-fab.js'
  },
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.js$/,
      loader: [
        'babel-loader',
        'eslint-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.vue$/,
      enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
      include: /src/,  // src文件夹下的文件需要被lint
      use: [{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')   // 编译后错误报告格式
        }
      }]
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] }
    }]
  },
  devServer: {
    inline: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    new VueLoaderPlugin()
  ]
}