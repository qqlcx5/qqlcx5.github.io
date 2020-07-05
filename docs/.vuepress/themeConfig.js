const path = require('path');
const rootpath = path.dirname(__dirname);
const utils = require('./utils/index');
const filehelper = require('./utils/initPage.js');

const themeConfig = {
  nav: [
    {
      text: '面试',
      link: '/Interview/',
    },
    {
      text: 'JavaScript',
      link: '/JavaScript/',
    },
    {
      text: 'Vuejs',
      link: '/vue/',
    },
    {
      text: 'CSS',
      link: '/css/',
    },
    {
      text: '其它',
      ariaLabel: 'Menu',
      items: [
        { text: 'VuePress', link: '/other/vuepress/' },
        { text: '开发工具', link: '/other/ide/' }
      ]
    },
    {
      text: '主页',
      ariaLabel: 'Menu',
      items: [
        { text: '主页一', link: '/404/' },
        { text: '主页二', link: '/404/Personal' }
      ]
    },
  ],
  
  sidebar: {
    '/JavaScript/': concatJs(),
    '/vue/': utils.genSidebar( 'Vuejs', filehelper.getFileName(rootpath + '/vue/'), false),
  },
};

// JavaScript
function concatJs() {
  const arr = utils.genSidebar( 'JavaScript', filehelper.getFileName(rootpath + '/JavaScript/'), false);
  arr.push(...utils.genSidebar('Js-Vue',filehelper.getFileName(rootpath + '/JavaScript/vue/', 'vue/'),false));
  return arr;
}

module.exports = themeConfig;
