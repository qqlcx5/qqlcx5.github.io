const plugins = {
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
}

module.exports = plugins;

// {
//   name: 'カワキヲアメク',
//   artist: '美波',
//   url: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/%E3%82%AB%E3%83%AF%E3%82%AD%E3%83%B2%E3%82%A2%E3%83%A1%E3%82%AF.mp3',
//   cover: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.png'
// },
// {
//   name: '轻音乐',
//   artist: '轻音乐',
//   url: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.mp3',
//   cover: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.png'
// },
// {
//   name: 'Stories',
//   artist: '黒石ひとみ',
//   url: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/Stories.mp3',
//   cover: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/Stories.jpg'
// }