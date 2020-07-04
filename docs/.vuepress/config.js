const themeConfig = require('./themeConfig');

module.exports = {
  title: '廖纯鑫博客',
  description: '前端、前端教程、小程序、个人博客、廖纯鑫博客、vue、js、react、node、mysql',
  themeConfig,
  plugins: {
    'cat': {},
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github',

      // all other options of Vssue are allowed
      owner: 'lcx',
      repo: 'https://qqlcx5.github.io/',
      clientId: 'e97dc2555ad5694e1d7f',
      clientSecret: 'fac6e9008f71c691b098f7d83c8973b946796213',
    },
  },
};
