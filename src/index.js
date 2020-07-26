const mod = require('cssnano-preset-default-nightly');

module.exports = function () {
  return mod({
    cssDeclarationSorter: { exclude: true },
  });
};
