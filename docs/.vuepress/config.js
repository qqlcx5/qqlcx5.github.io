const plugins = require('./plugins');
const themeConfig = require('./themeConfig');

module.exports = {
  
  title: '廖纯鑫博客',
  description: '前端、前端教程、小程序、个人博客、廖纯鑫博客、vue、js、react、node、mysql',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.png' }],
    ['link', { rel: 'mask-icon', href: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig,
  plugins
};