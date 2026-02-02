<template>
  <div class="home-container">
    <div class="triple-slider-wrapper">
      <!-- Left Slider -->
      <swiper
        class="slider-side slider-left"
        effect="creative"
        :loop="true"
        :allow-touch-move="false"
        :speed="1000"
        :creative-effect="creativeEffectLeft"
        :modules="modules"
        @swiper="setLeftSwiper"
        @click="handleLeftClick"
      >
        <!-- 使用 leftImages -->
        <swiper-slide v-for="(img, index) in leftImages" :key="'left-' + index">
          <div class="slide-inner">
            <img :src="img" alt="Left Slide" />
          </div>
        </swiper-slide>
      </swiper>

      <!-- Main Slider (Controller) -->
      <swiper
        class="slider-main"
        :loop="true"
        :speed="1000"
        :grab-cursor="true"
        :modules="modules"
        @swiper="setMainSwiper"
      >
        <!-- 主滑块保持原顺序 -->
        <swiper-slide v-for="(img, index) in images" :key="'main-' + index">
          <div class="slide-inner">
            <img :src="img" alt="Main Slide" />
          </div>
        </swiper-slide>
      </swiper>

      <!-- Right Slider -->
      <swiper
        class="slider-side slider-right"
        effect="creative"
        :loop="true"
        :allow-touch-move="false"
        :speed="1000"
        :creative-effect="creativeEffectRight"
        :modules="modules"
        @swiper="setRightSwiper"
        @click="handleRightClick"
      >
        <!-- 使用 rightImages -->
        <swiper-slide v-for="(img, index) in rightImages" :key="'right-' + index">
          <div class="slide-inner">
            <img :src="img" alt="Right Slide" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Content below -->
    <div class="content">
      <h1>Home</h1>
      <p>Welcome to the notebook application.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import type { Swiper as SwiperType } from 'swiper/types'

// Import images
import img1 from '@/assets/duba-text.png'
import img2 from '@/assets/logo.png'
import img3 from '@/assets/go.png'
import img4 from '@/assets/soul.png'

const images = [img1, img2, img3, img4]

// 生成左侧滑块数据：[D, A, B, C] - 显示上一张
const leftImages = computed(() => {
  const imgs = [...images]
  const last = imgs.pop()
  if (last) imgs.unshift(last)
  return imgs
})

// 生成右侧滑块数据：[B, C, D, A] - 显示下一张
const rightImages = computed(() => {
  const imgs = [...images]
  const first = imgs.shift()
  if (first) imgs.push(first)
  return imgs
})

// Swiper instances
const leftSwiper = ref<SwiperType | null>(null)
const mainSwiper = ref<SwiperType | null>(null)
const rightSwiper = ref<SwiperType | null>(null)

const setLeftSwiper = (swiper: SwiperType) => {
  leftSwiper.value = swiper
}
const setMainSwiper = (swiper: SwiperType) => {
  mainSwiper.value = swiper
}
const setRightSwiper = (swiper: SwiperType) => {
  rightSwiper.value = swiper
}

// 2. 点击两侧切换逻辑
const handleLeftClick = () => {
  if (mainSwiper.value) {
    mainSwiper.value.slidePrev() // 改为上一张：从左往右
  }
}

const handleRightClick = () => {
  if (mainSwiper.value) {
    mainSwiper.value.slideNext() // 改为下一张：从右往左
  }
}

// 监听所有 swiper 实例是否就绪，就绪后绑定联动控制
watch([leftSwiper, mainSwiper, rightSwiper], () => {
  if (leftSwiper.value && mainSwiper.value && rightSwiper.value) {
    // 主滑块控制左右滑块
    mainSwiper.value.controller.control = [leftSwiper.value, rightSwiper.value]
  }
})

// Swiper Modules
const modules = [Controller, EffectCreative]

// Creative Effects for Parallax/Reverse visual feel
const creativeEffectLeft = {
  prev: {
    translate: ['-100%', 0, 0], // 从左侧移出
    opacity: 0.5
  },
  next: {
    translate: ['100%', 0, 0], // 从右侧进入
    opacity: 0.5
  }
}

const creativeEffectRight = {
  prev: {
    translate: ['-100%', 0, 0], // 从左侧移出
    opacity: 0.5
  },
  next: {
    translate: ['100%', 0, 0], // 从右侧进入
    opacity: 0.5
  }
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding: 0; /* Remove default padding */
}

/* Slider Layout */
.triple-slider-wrapper {
  display: flex;
  width: 100%;
  height: 60vh; /* Adjust height as needed */
  position: relative;
  justify-content: center;
  align-items: center;
  background: #000;
}

.slider-side {
  /* 1. 修改宽高比例 1:1.8 */
  /* 计算方式：宽度依然是 25%，高度由 aspect-ratio 控制 */
  width: 40%;
  aspect-ratio: 1 / 0.8;
  height: auto; /* Allow height to be determined by aspect ratio */
  z-index: 1;
  cursor: pointer; /* 增加手型光标提示可点击 */
  /* 确保超出范围的动画不可见 */
  overflow: hidden;
}

.slider-main {
  width: 50%;
  /* 这里的比例可以保持一致，也可以略有不同，为了对齐通常建议一致或由父容器高度控制 */
  aspect-ratio: 1 / 0.8; 
  height: auto;
  z-index: 10;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  /* 增加左右负边距，实现遮盖效果 */
  /* 让左右各“吃掉”侧边栏宽度的 20% 左右，这里使用负 margin 来拉近侧边栏 */
  margin: 0 -8%;
}

/* Slide Content */
.swiper-slide {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.slide-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1000ms cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: scale(1.2);
  will-change: transform;
}

/* 增加裁剪路径以调整左右图片高度比例 - 移至容器层级 */
.slider-left {
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
}

.slider-right {
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%);
}

/* Active State Animation */
.swiper-slide-active .slide-inner img {
  transform: scale(1);
}

/* Add some visual separation */
/* 
.slider-left {
  margin-right: -1px;
}
.slider-right {
  margin-left: -1px;
} 
*/

.content {
  padding: 20px;
  text-align: center;
  flex: 1;
}
</style>
