const postcss = require('postcss');
const createSimplePreset = require('..');

const cssnanoPlugin = (options = {}) => {
  const plugins = [];
  const nanoPlugins = createSimplePreset(options).plugins;
  for (const nanoPlugin of nanoPlugins) {
    if (Array.isArray(nanoPlugin)) {
      const [processor, opts] = nanoPlugin;
      if (
        typeof opts === 'undefined' ||
        (typeof opts === 'object' && !opts.exclude) ||
        (typeof opts === 'boolean' && opts === true)
      ) {
        plugins.push(processor(opts));
      }
    } else {
      plugins.push(nanoPlugin);
    }
  }
  return postcss(plugins);
};

cssnanoPlugin.postcss = true;
module.exports = cssnanoPlugin;
