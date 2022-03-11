function pluginCreator() {
  return {
    postcssPlugin: 'postcss-plugin-stub',
    prepare() {
      return {};
    },
  };
}
pluginCreator.postcss = true;

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = pluginCreator;
