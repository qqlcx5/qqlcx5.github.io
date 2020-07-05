const themeConfig = require('./themeConfig');

module.exports = {
  title: '廖纯鑫博客',
  description: '前端、前端教程、小程序、个人博客、廖纯鑫博客、vue、js、react、node、mysql',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig,
  plugins: {
    '@vuepress-reco/vuepress-plugin-kan-ban-niang': {
      theme: ['koharu', 'miku', 'z16', 'wanko'],
      clean: true
    },
    '@vuepress-reco/vuepress-plugin-back-to-top': {
      customStyle: {
        right:'3rem',
        bottom: '6rem',
        width: '2.5rem',
        height: '2.5rem',
        'border-radius': '.25rem',
        'line-height': '2.5rem',
        'box-shadow': '0 1px 6px 0 rgba(0,0,0,.2)',
        backgroundColor: '#fff'
      }
    },
    '@vuepress-reco/vuepress-plugin-bgm-player': {
      audios: [
        {
          name: '轻音乐',
          artist: '轻音乐',
          url: '/bgm/1.mp3',
          cover: '/bgm/1.png'
        },
      ],
      autoShrink: true, //默认缩小
      shrinkMode: 'mini' //迷你模式
    },
    '@vuepress/google-analytics':{'ga': 'UA-171545170-1' },
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github-v4',
      owner: 'qqlcx5',
      repo: 'qqlcx5.github.io',
      clientId: '012e6ab702f2bc7fe841',
      clientSecret: 'c32fa7df3cda558d7b659bcbd7162f916844d1fd',
    },
  },
};