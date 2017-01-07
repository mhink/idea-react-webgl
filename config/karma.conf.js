import { omit } from 'lodash';
import webpackConfig from './webpack.config.js';
import { argv } from 'yargs';

export default (config) => config.set({
  reporters: [
    'mocha',
  ],
  singleRun: !argv.watch,
  browsers: [
    'PhantomJS',
  ],
  frameworks: [
    'mocha',
    'chai',
    'sinon',
  ],
  files: [
    'tests/*.spec.js',
    'tests/**/*.spec.js',
  ],
  preprocessors: {
    'tests/*.spec.js'    : ['webpack'],
    'tests/**/*.spec.js' : ['webpack'],
  },
  webpack: {
    ...webpackConfig,
    plugins: [],
    performance: {
      hints: false,
    }
  },
  webpackMiddleware: {
    noInfo: true,
    stats: {
      chunks: false
    }
  },
  plugins: [
    require('karma-webpack-with-fast-source-maps'),
    require('karma-mocha'),
    require('karma-chai'),
    require('karma-sinon'),
    require('karma-phantomjs-launcher'),
    require('karma-mocha-reporter'),
  ]
});
