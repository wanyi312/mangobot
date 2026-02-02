<template>
  <div class="soul">
    <div class="soul-bg"></div>
    <div class="soul-left"></div>
    <!-- 视频 -->
    <div class="soul-right"></div>
  </div>
</template>

<script setup>
</script>
<style lang="less" scoped>
.soul {
position: absolute;
width: 1440px;
height: 709px;
left: calc(50% - 1440px/2);
top: 4088px;
  &-left {
    position: absolute;
    width: 662px;
    height: 368px;
    left: calc(50% - 662px / 2 - 350px);
    top: 210px;
    background: url("@/assets/soul-left.png") no-repeat center center;
    background-size: 100% 100%;
  }
  &-right {
    position: absolute;
    width: 691px;
    height: 524px;
    left: 710px;
    top: 54px;
    border-radius: 36px;
  }
  &-bg {
    position: absolute;
    width: 1440px;
    height: 900px;
    left: calc(50% - 1440px / 2);
    top: -56px;
    background: url("@/assets/soul-bg.png") no-repeat center center;
    background-size: 100% 100%;
  }
}
</style>