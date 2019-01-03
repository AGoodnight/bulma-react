const Path = require('path'),
  Webpack = require('webpack'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  NodeExternals = require('webpack-node-externals'),

  sharedRules = [
    {
      test: /\.js$/,
      use: 'babel-loader',
    },
    {
      test: /\.json($|\?)/,
      use: 'json-loader',
      type: 'javascript/auto'
    },
    {
      test: /.(jpg|jpeg|png|svg)$/,
      exclude: /node_modules/,
      use: [
        {
          loader:'file-loader',
          options:{
            outputPath:Path.resolve(__dirname, 'assets')
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
          name: 'assets/[name].css',
        }
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader?-url'
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    }
  ],

  browserConfig = {
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    target: 'web',
    devtool: 'source-map',
    mode: 'development',
    entry: ['./src/browser/index.js'],
    output: {
      path: Path.resolve(__dirname, 'assets'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: sharedRules
    },
    plugins: [
      new Webpack.DefinePlugin({
        __isBrowser__: "true",
        'process.env': {
          __isBrowser__: true
        }
      }),
    ]
  },

  serverConfig = {
    target: 'node',
    externals: [NodeExternals()],
    mode: 'development',
    devtool: 'source-map',
    entry: ['@babel/polyfill', './src/server/index.js'],
    output: {
      path: __dirname,
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: sharedRules
    },
    plugins: [
      new CopyWebpackPlugin([
        {from:'src/assets/img', to:'assets/img'}
      ]),
      new Webpack.DefinePlugin({
        __isBrowser__: "false",
        'process.env': {
          __isBrowser__: false
        }
      }),
    ]
  }

module.exports = [browserConfig, serverConfig]
