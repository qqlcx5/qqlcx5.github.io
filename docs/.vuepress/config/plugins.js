
const plugins = [
    // 本地插件
    // [require('../plugins/vuepress-plugin-musicplayer'), {}],
    // 看板娘插件
    ['vuepress-plugin-live2d-model', {}],
    // 音乐插件
    ['vuepress-plugin-musicplayer', {}],
    // 代码块复制按钮
    ['one-click-copy', {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功~~', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    ['@vuepress/last-updated',{
      transformer: (timestamp) => {
        const dayjs = require('dayjs')
        return dayjs(timestamp,).format('YYYY-MM-DD HH:mm')
      }
    }],
    // 返回首页样式
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
    // 谷歌分析
    ['@vuepress/google-analytics', { 'ga': 'UA-171545170-1' }],
    // 留言
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github-v4',
      owner: 'qqlcx5',
      repo: 'qqlcx5.github.io',
      clientId: '012e6ab702f2bc7fe841',
      clientSecret: 'c32fa7df3cda558d7b659bcbd7162f916844d1fd',
    }],
  ]
  
  module.exports = plugins;