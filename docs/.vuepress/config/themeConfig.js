const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', 'utils');
const docsRoot = path.join(__dirname, '..', '..');
const readFile = require(utilsRoot + '/readFile');

const js = readFile(docsRoot + '/js');
const 其他 = readFile(docsRoot + '/其他');

const 推荐 = [{
    title: '推荐',
    collapsable: false,
    children: readFile(docsRoot + '/推荐')
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
            text: '推荐',
            link: '/推荐/01.awesome-lib',
        },
        {
            text: 'Vuejs',
            link: '/vue/button',
        },
        {
            text: 'JavaScript',
            link: '/js/基础/01.if-else优化方案',
        },
        {
            text: '生态系统',
            ariaLabel: '项目',
            items: [
                { text: 'nutils-js', link: 'https://qqlcx5.github.io/nutils-js-site/' },
                { text: 'uni-crab', link: 'https://github.com/qqlcx5/uni-crab' },
                { text: 'vuepress-template', link: 'https://github.com/qqlcx5/vuepress-template' },
                { text: 'vuepress-plugin-musicplayer', link: 'https://github.com/qqlcx5/vuepress-plugin-musicplayer' },
                { text: 'vuepress-plugin-notify', link: 'https://github.com/qqlcx5/vuepress-plugin-notify' },
                { text: 'vuepress-plugin-live2d-model', link: 'https://github.com/qqlcx5/vuepress-plugin-live2d-model' },
                { text: 'vuepress-plugin-live2d-model', link: 'https://github.com/qqlcx5/vuepress-plugin-live2d-model' },
            ]
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
            text: 'nutils-js',
            link: 'https://qqlcx5.github.io/nutils-js-site/',
        },
        {
            text: '国内文档',
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
        '/js/': js,
        '/vue/': vue,
        '/推荐/': 推荐,
        '/其他/': 其他,
    },
};

module.exports = themeConfig;
