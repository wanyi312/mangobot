<template>
  <div class="bg-imgs">
    <div :class="['bg-imgs-img', item.className]" v-for="item in bgImgs.imgs" :key="item.url" :style="{ backgroundImage: `url(${item.url})` }">
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue'
const { bgImgs = {} } = defineProps(['bgImgs'])
</script>
<style lang="less" scoped>
.bg-imgs {
  display: flex;
  flex-wrap: wrap;
  &-img {
    background-repeat: no-repeat;
    background-color: lightgray;
    background-position: 50% 50%;
    background-size: cover;
    &:first-child {
      width: 1920px;
      height: 881px;
    }
    &:nth-child(2) {
      width: 50%;
      height: 881px;
    }
    &:nth-child(3) {
      width: 50%;
      height: 881px;
    }
  }
  
    .a2Img1 {
      background-position: 0px -1047.461px;
      background-size: 100% 326.861%;
    }
    .a2Img2 {
      background-position: 50% 50%;
      background-size: cover;
    }
    .a2Img3 {
      background-position: -98px -221.206px;
      background-size: 120.417% 150.217%;
    }

    .x2Img1 {
      background-position: -589.798px -660.376px;
      background-size: 135.685% 197.161%;
    }
    .x2Img2 {
      background-position: 50% 50%;
      background-size: cover;
    }
    .x2Img3 {
      background-position: 50% 50%;
      background-size: cover;
    }

    .d1Img1 {
      background-position: 50% 50%;
      background-size: cover;
    }
    .d1Img2 {
      background-position: -640.913px -432.363px;
      background-size: 182.396% 272.881%;
    }
    .d1Img3 {
      background-position: -432.098px -39.018px;
      background-size: 184.489% 108.893%;
    }

    .g1Img3{
      background-position: -202.753px 0.048px;
      background-size:  163.148% 100%;
    }
}
</style>