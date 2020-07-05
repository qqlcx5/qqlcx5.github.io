<template>
  <div class="imageSlider">
    <transition-group name="fade" tag="div">
      <div class="imageSlider-wrapper" v-for="number in [currentNumber]" :key="number">
        <img class="imageSlider-item" :src="images[currentNumber]" @mouseover="stopRotation" @mouseout="startRotation" />
      </div>
    </transition-group>
    <!-- 左右箭头位置 -->
    <div class="imageSlider-nav" @mouseover="stopRotation" @mouseout="startRotation">
      <a class="prev fas fa-chevron-left" @click="prev"></a>
      <a class="next fas fa-chevron-right" @click="next"></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: ["http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg", "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg", "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg", "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"],
      currentNumber: 0,
      timer: null
    };
  },
  mounted() {
    this.startRotation();
  },
  methods: {
    startRotation() {
      this.timer = setInterval(this.next, 3000);
    },
    stopRotation() {
      clearInterval(this.timer);
      this.timer = null;
    },
    next() {
      this.currentNumber =
        this.currentNumber + 1 === this.images.length
          ? 0
          : (this.currentNumber += 1);
    },
    prev() {
      this.currentNumber =
        this.currentNumber === 0
          ? this.images.length - 1
          : (this.currentNumber -= 1);
    }
  }
};
</script>
<style type="text/css">
.imageSlider {
  position: relative;
  display: block;
  width: 90vw;
  height: 45vh;
}
/* item */
.imageSlider .imageSlider-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.imageSlider .imageSlider-item {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
/* 左右箭头样式 */
.imageSlider .imageSlider-nav {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 10;
}
.imageSlider .imageSlider-nav .next,
.imageSlider .imageSlider-nav .prev {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #4db6ac;
  cursor: pointer;
}

.imageSlider .imageSlider-nav .next:hover,
.imageSlider .imageSlider-nav .prev:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
