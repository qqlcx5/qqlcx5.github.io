const { resolve } = require('path');
module.exports = (options, context) => ({
  define() {
    return {};
  },
  name: 'vuepress-plugin-musicPlayer',
  enhanceAppFiles: [resolve(__dirname, './bin/enhanceAppFile.js')],
  globalUIComponents: 'musicPlayer',
});
