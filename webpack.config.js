var webpack = require('webpack')
var path = require('path')
var CONFIG = require('./config')
var ENV = process.env.NODE_ENV
var utils = require('./utils')
var entries = utils.getEntry(utils.resolve('/src/**/index.js'))
var packager = require('./package.json')

module.exports = {
  entry: entries,
  output: {
    path: path.join(__dirname, CONFIG.outputDir),
    publicPath: path.join(__dirname, CONFIG.outputDir),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
  },
  devServer: {
    historyApiFallback: false,
    noInfo: true,
    overlay: true,
    publicPath: CONFIG.outputDir,
    disableHostCheck: true,
    host: '0.0.0.0',
    contentBase: './htmlDemo'
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${ENV}"`,
        _VERSION_: `"${packager.version}"`
      }
    })
  ]
}

if (ENV === 'prod') {
  module.exports.devtool = 'none'
  module.exports.plugins = module.exports.plugins || []
  if (process.env.npm_config_report) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    module.exports.plugins.push(new BundleAnalyzerPlugin())
  }
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
