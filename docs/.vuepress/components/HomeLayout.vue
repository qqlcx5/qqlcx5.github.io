<template>
  <div class="HomeLayout">
    <div class="info">
      <!-- 头像 -->
      <div class="info-img-box">
        <div class="info-img"></div>
      </div>
      <!-- 信息 -->
      <a href="/"
         class="info-title">
        <span class="info-name">👉Lawiet博客👈</span>
        <span class="info-desc">Lawiet Personal Website</span>
      </a>
      <!-- 博客地址 -->
      <div class="info-blog-box">
        <a href="https://gitee.com/qqlcx5"
           class="info-blog">Gitee</a>
        <a href="https://github.com/qqlcx5"
           class="info-blog">GitHub</a>
        <a href="https://juejin.im/user/5a7014f1f265da3e3f4cf9ae/posts"
           class="info-blog">掘金</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.HomeLayout {
  /* height: 100vh;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.HomeLayout::before {
  height: 100vh;
  width: 100%;
  background: url("https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/home_bg.jpg") no-repeat;
  background-size: cover;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: -1; */
  /*-1 可以当背景*/
  -webkit-filter: blur(2px);
  filter: blur(2px) opacity(96%);
}

.info {
  margin: 10% auto 0;
  width: 30%;
  height: 30vw;
  min-width: 320px;
  min-height: 320px;
  background: rgba(255, 255, 255, 0.6);
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.info:hover {
  box-shadow: 0px 0px 8px 0px #e8e8e8;
}

.info-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 25%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  overflow: hidden;
  /* cursor: default; */
}

.info-name {
  font-size: 32px;
  color: #fefefe;
  text-align: center;
  font-weight: bolder;
  text-shadow: 0 1px 1px #333;
}

.info-desc {
  padding-top: 2%;
  font-size: 16px;
  /* padding-top: 15px; */
  color: #fefefe;
  text-shadow: 0 1px 1px #333;
}

.info-img-box {
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 10%;
}

.info-img::before {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: url('https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.1/img/1.png') no-repeat center;
  background-size: cover;
  content: "";
  position: absolute;
  transform: translate(-50%);
  top: 0;
  left: 50%;
  z-index: -1;
  /*-1 可以当背景*/
  -webkit-filter: opacity(90%);
  filter: opacity(90%);
}

.info-blog-box {
  padding-top: 5%;
  width: 90%;
  /* background-color: #fff; */
  display: flex;
  justify-content: space-around;
}

.info-blog {
  /* min-width: 20px; */
  padding: 0 15px;
  background-color: #ddd;
  border-radius: 20px;
  height: 30px;
  line-height: 30px;
  color: #fefefe;
  background-color: #67c23a;
  border-color: #67c23a;
}
</style>