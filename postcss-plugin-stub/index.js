function pluginCreator() {
  return {
    postcssPlugin: 'postcss-plugin-stub',
    prepare() {
      return {};
    },
  };
}
pluginCreator.postcss = true;
export default pluginCreator;
