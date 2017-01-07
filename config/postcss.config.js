const path = require('path');

module.exports = function(ctx) {
  return {
    plugins: [
      require('postcss-smart-import')({
        addDependencyTo: ctx.webpack
      }),
      require('postcss-cssnext'),
      require('postcss-css-variables'),
    ]
  }
};
