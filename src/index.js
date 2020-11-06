const mod = require('cssnano-preset-default-nightly');

module.exports = function (opts = {}) {
  const options = Object.assign(
    {},
    { cssDeclarationSorter: { exclude: true }, calc: { exclude: true } },
    opts
  );
  return mod(options);
};
