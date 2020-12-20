
const plugins = [
    ['vuepress-plugin-musicplayer', {} ],
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
      theme: ['koharu', 'miku', 'z16', 'wanko'],
      clean: true
    }],
    ['@vuepress/pwa', {
        serviceWorker: true, //用于缓存页面的内容以供离线使用
        updatePopup: true
    }],
    ['@vuepress/last-updated',{
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs')
        return dayjs(timestamp,).format('YYYY-MM-DD HH:mm')
      }
    }],
    ['@vuepress-reco/vuepress-plugin-back-to-top', {
      customStyle: {
        right: '3rem',
        bottom: '6rem',
        width: '2.5rem',
        height: '2.5rem',
        'border-radius': '.25rem',
        'line-height': '2.5rem',
        'box-shadow': '0 1px 6px 0 rgba(0,0,0,.2)',
        backgroundColor: '#fff'
      }
    }],
    ['@vuepress/google-analytics', { 'ga': 'UA-171545170-1' }],
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github-v4',
      owner: 'qqlcx5',
      repo: 'qqlcx5.github.io',
      clientId: '012e6ab702f2bc7fe841',
      clientSecret: 'c32fa7df3cda558d7b659bcbd7162f916844d1fd',
    }],
  ]
  
  module.exports = plugins;