const mod = require('cssnano-preset-default');

module.exports = function (opts = {}) {
  const options = Object.assign(
    {},
    { cssDeclarationSorter: { exclude: true }, calc: { exclude: true } },
    opts
  );
  return mod(options);
};
