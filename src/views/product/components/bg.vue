<template>
  <div class="bg">
    <div v-if="bg === 'A2'" class="bg-img"></div>
    <div v-else-if="bg === 'D1'" class="bg-D1"></div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const { bg = "" } = defineProps(["bg"]);
</script>
<style lang="less" scoped>
.bg {
  display: flex;
  height: 1143px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  &-img {
    width: 100%;
    height: 881px;
    flex-shrink: 0;
    background: url(../assets/a2-attrs-bg.jpg) lightgray 50% / cover no-repeat;
  }
  &-D1 {
    display: flex;
    width: 844px;
    height: 1092px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    background: url(../assets/D1-attrs-bg.png) #fff 50% / cover no-repeat;
  }
  svg {
    display: flex;
    width: 1696px;
    height: 1076px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin: 0 auto;
  }
}
</style>