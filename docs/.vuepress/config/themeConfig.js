const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', 'utils');
const docsRoot = path.join(__dirname,'..', '..');
const readFile = require(utilsRoot + '/readFile');

const js = readFile(docsRoot + '/js');
const 其他 = readFile(docsRoot + '/其他');

const 面试 = [{
    title: '面试',
    collapsable: false,
    children: readFile(docsRoot + '/面试')
}]
const vue = [{
    title: '基础',
    collapsable: false,
    children: readFile(docsRoot + '/vue')
}]


const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间', //最后更新时间
  nav: [
    {
      text: '面试',
      link: '/面试/01.awesome-lib',
    },
    {
        text: 'Vuejs',
        link: '/vue/button',
    },
    {
      text: 'JavaScript',
      link: '/js/基础/01.Javascript前端高效开发工具库',
    },
    {
      text: '其他',
      ariaLabel: 'Menu',
      items: [
        { text: '开发工具', link: '/其他/ide/VSCode插件推荐' },
        { text: 'VuePress', link: '/其他/vuepress/如何便捷的写作' },
        { text: 'GitHub黑科技', link: '/其他/github/解决GitHub下载慢的方法' }
      ]
    },
    {
      text: '国内版',
      link: 'https://qqlcx5.gitee.io/',
    },
    // {
    //   text: '主页',
    //   ariaLabel: 'Menu',
    //   items: [
    //     { text: '主页一', link: '/404/' },
    //     { text: '主页二', link: '/404/Personal' }
    //   ]
    // },
  ],
  
  sidebar: {
    '/面试/': 面试,
    '/js/': js,
    '/vue/': vue,
    '/其他/': 其他,
  },
};

module.exports = themeConfig;
