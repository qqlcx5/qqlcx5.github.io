const themeConfig = require('./themeConfig');

module.exports = {
  title: '廖纯鑫博客',
  description: '前端、前端教程、小程序、个人博客、廖纯鑫博客、vue、js、react、node、mysql',
  themeConfig,
  plugins: {
    'cat': {},
    '@vuepress/google-analytics':{'ga': 'UA-171530730-1' },
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github-v4',
      owner: 'qqlcx5',
      repo: 'qqlcx5.github.io',
      clientId: '012e6ab702f2bc7fe841',
      clientSecret: 'c32fa7df3cda558d7b659bcbd7162f916844d1fd',
    },
  },
};
