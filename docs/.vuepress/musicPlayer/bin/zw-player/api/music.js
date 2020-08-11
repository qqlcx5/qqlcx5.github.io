import axios from 'axios'
//获取歌词
export const getWords=(id)=>{
    return axios.get(`https://blogme.top:3000/lyric?id=${id}`);
}
//获取歌曲详情
export const getMusicInfo=(id)=>{
    return axios.get(`https://blogme.top:3000/song/detail?ids=${id}`);
}
//获取歌曲url
export const getMusicUrl=(id)=>{
    return axios.get(`https://blogme.top:3000/song/url?id=${id}`);   
}
//获取热门歌曲
export const getHotMusic=(id)=>{
    return axios.get(`https://blogme.top:3000/top/list?idx=${id}`);
}
//获取搜索建议
export const getSearchSuggest=(key)=>{
    return axios.get(`https://blogme.top:3000/search/suggest?keywords=${key}`)
}
//获取歌曲热门评论
export const getHotTalk=(id)=>{
    return axios.get(`https://blogme.top:3000/comment/music?id=${id}&limit=3`)
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4307620a9933a7900b655b578321c816";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
  console.log('_hmt_hmt_hmt_hmt');
})();