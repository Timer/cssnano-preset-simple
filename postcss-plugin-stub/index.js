const postcss = require('postcss');
module.exports = postcss.plugin('postcss-plugin-stub', function () {
  return function () {};
});
