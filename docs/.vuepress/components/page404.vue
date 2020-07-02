<template>
  <div>
    <audio id="backgroud-music" controls="controls" autoplay="autoplay" loop="loop">
      <source src="/404/music.mp3" />
    </audio>
    <div id="background" class="wall"></div>
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    <div id="top" class="wall"></div>
    <div class="main">
      <div>
        <a href="/" class="return-home a1"></a>
      </div>
      <div style="text-align: right; margin-top:20px">
        <a href="/" class="return-home a2"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "page404",
  mounted() {
    this.handleUpdate();
  },
  methods: {
    handleInit() {
      const hitokoto = document.querySelector(".a1");
      const from = document.querySelector(".a2");
      const bk = document.getElementById("background");
      update();
      function update() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://v1.hitokoto.cn/?c=d");
        xhr.send();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var Hi = JSON.parse(xhr.responseText);
            this.hitokoto = Hi.hitokoto;
            hitokoto.innerHTML = Hi.hitokoto;
            from.innerHTML = "作者:" + Hi.from; //可自定义输出格式
          }
        };
      }
    },
    handleUpdate() {
      clearTimeout(this.timer);
      this.handleInit();
      this.timer = setTimeout(() => {
        this.handleUpdate();
      }, 5000);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>
<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}
audio {
  z-index: 5;
  position: absolute;
  bottom: 0;
  opacity: 0.1;
  -webkit-transition: all 2s;
  -moz-transition: all 2s;
  -ms-transition: all 2s;
  -o-transition: all 2s;
  transition: all 2s;
}
audio:hover {
  opacity: 1;
}
.wall {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
div#background {
  background: url(https://s5.mogucdn.com/mlcdn/fe720b/191127_7519e2d54klg44h2d35fjleg3d6c2_3430x1462.jpg)
    no-repeat;
  -webkit-animation: da 100s linear infinite;
  -moz-animation: da 100s linear infinite;
  -o-animation: da 100s linear infinite;
  animation: da 100s linear infinite;
  background-size: cover;
}
div#midground {
  background: url(https://s5.mogucdn.com/mlcdn/fe720b/191127_8aa686ieib6k134748ie5928i5f57_500x500.png);
  z-index: 1;
  -webkit-animation: cc 100s linear infinite;
  -moz-animation: cc 100s linear infinite;
  -o-animation: cc 100s linear infinite;
  animation: cc 100s linear infinite;
}
div#foreground {
  background: url(https://s11.mogucdn.com/mlcdn/fe720b/191127_88j635d9hal691hk7l8j3ch59gga9_500x500.png);
  z-index: 2;
  -webkit-animation: cc 153s linear infinite;
  -o-animation: cc 153s linear infinite;
  -moz-animation: cc 153s linear infinite;
  animation: cc 153s linear infinite;
}
div#top {
  background: url(https://s5.mogucdn.com/mlcdn/fe720b/191127_8aa686ieib6k134748ie5928i5f57_500x500.png);
  z-index: 4;
  -webkit-animation: da 100s linear infinite;
  -o-animation: da 100s linear infinite;
  animation: da 100s linear infinite;
}
@-webkit-keyframes cc {
  from {
    background-position: 0 0;
    transform: translateY(10px);
  }
  to {
    background-position: 600% 0;
  }
}
@-o-keyframes cc {
  from {
    background-position: 0 0;
    transform: translateY(10px);
  }
  to {
    background-position: 600% 0;
  }
}
@-moz-keyframes cc {
  from {
    background-position: 0 0;
    transform: translateY(10px);
  }
  to {
    background-position: 600% 0;
  }
}
@keyframes cc {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 600% 0;
  }
}
@keyframes da {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 600%;
  }
}
@-webkit-keyframes da {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 600%;
  }
}
@-moz-keyframes da {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 600%;
  }
}
@-ms-keyframes da {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 600%;
  }
}
button,
input {
  font-size: 1em;
  border-radius: 3px;
  -webkit-appearance: none;
}
input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #0000;
  background-color: #0000;
  resize: vertical;
}
input:focus {
  background-color: #0000;
  outline: 0;
  border: 1px solid #fff;
}
button {
  border: 0;
  background: #cecece5e;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  user-select: none;
}
.return-home:hover,
button:focus,
button:hover {
  opacity: 0.7;
}
button:active {
  opacity: 1;
}
.main {
  z-index: 100;
  width: 100%;
  max-width: 300px;
  height: 80px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.09);
  transition: all 0.12s ease-out;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.alert {
  width: 80px;
}
.mk-side-form {
  margin-bottom: 28px;
}
.mk-side-form input {
  float: left;
  padding: 2px 10px;
  width: 77%;
  height: 37px;
  border: 1px solid #0000;
  border-right-color: transparent;
  border-radius: 2px 0 0 2px;
  line-height: 37px;
}
.mk-side-form button {
  position: relative;
  overflow: visible;
  width: 23%;
  height: 37px;
  border-radius: 0 2px 2px 0;
  text-transform: uppercase;
}
#pw-error {
  color: red;
  margin-top: 15px;
  margin-bottom: -20px;
}
.return-home {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}
</style>