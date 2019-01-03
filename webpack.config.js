const Path = require('path'),
  Webpack = require('webpack'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  NodeExternals = require('webpack-node-externals'),

  configurations = [{
    name:'buildreact',
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    target: 'web',
    devtool: 'source-map',
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
      path: Path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.json($|\?)/,
        use: ['json-loader'],
        exclude: /node_modules/,
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
      }]
    },
    plugins: [
      new Webpack.HotModuleReplacementPlugin(),
      new CopyWebpackPlugin([
        {
          from: Path.resolve(__dirname, 'src/index.html'),
          to: Path.resolve(__dirname, 'dist')
        },
        {
          from: Path.resolve(__dirname, 'src/assets'),
          to: Path.resolve(__dirname, 'dist/assets')
        }
      ])
    ],
    devServer: {
      contentBase: './dist',
      index:'index.html',
      hot: true
    }
  },
  {
    name:'compilesass',
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    target: 'web',
    devtool: 'source-map',
    mode: 'development',
    entry: ['./src/assets/sass/style.scss'],
    output: {
      path: Path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module:{
      rules:[
        {
          test: /\.scss$/,
          exclude: /node_modules/,
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
      ]
    }
  }
]

module.exports = configurations
