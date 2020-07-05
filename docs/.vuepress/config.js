const plugins = require('./plugins');
const themeConfig = require('./themeConfig');

module.exports = {
  
  title: '廖纯鑫博客',
  description: '前端、前端教程、小程序、个人博客、廖纯鑫博客、vue、js、react、node、mysql',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // base: '/vuepress/',
  themeConfig,
  plugins
};