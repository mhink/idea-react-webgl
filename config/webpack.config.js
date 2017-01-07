const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = path.resolve(__dirname, '..');
const paths = {
  base,
  src     : path.resolve(base, 'src'),
  dist    : path.resolve(base, 'dist'),
  static  : path.resolve(base, 'static'),
};

module.exports = {
  target  : 'web',
  devtool : 'source-map',
  entry   : {
    main: 'main.js',
    vendor: ['react', 'redux', 'redux-saga', 'lodash'],
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
  context : paths.src,
  output  : {
    filename: "[name].[hash].js",
    path: paths.dist,
  },
  resolve : {
    extensions: ['.js', '.css'],
    modules: [
      paths.src,
      'node_modules'
    ],
  },

  module: {
    rules: [
      {
        test: /\.(glsl|vs|fs)$/,
        exclude: /node_modules/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: "[local]__[path][name]__[hash:base64:5]",
              importLoader: 1
            }
          },
          { loader: 'postcss-loader',
            options: {
              config: 'config/postcss.config.js' 
            }
          }
        ]
      },
      {
        test: /\.json/,
        loader: 'json-loader',
      },
      {
        test: /\.png$/,
        use: [
          { loader: 'url-loader',
            query: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: path.resolve(paths.static, 'favicon.ico'),
      inject: true
    })
  ],
};
