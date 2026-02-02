<template>
  <div class="high">
    <div class="high-title">Highlighted Features of A1 Ultra:</div>
    <div class="high-content">
      <div
        :class="['high-content-item', active == index ? 'active' : '']"
        v-for="(item, index) in arr"
        :key="item.title"
        @click="active = index"
        :style="{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${item.image})`,
        }"
      >
        <div class="high-content-item-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const active = ref("0");
const arr = [
  {
    title: "",
    image: "",
  },
  {
    title: "",
    image: "",
  },
  {
    title: "",
    image: "",
  },
  {
    title: "",
    image: "",
  },
  {
    title: "",
    image: "",
  },
];
</script>

<style lang="less" scoped>
.high {
  width: 1362px;
  margin: 0 auto 59px;
  box-sizing: border-box;

  &-title {
    color: #0f0f0f;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;

    /* H1 */
    font-family: Manrope;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 84px; /* 116.667% */
    letter-spacing: -2px;
  }
  &-content {
    width: 100%;
    height: 563px;
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    &-item {
      width: 154px;
      height: 563px;
      border-radius: 33px;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .active {
      width: 702px;
      height: 563px;
    }
  }
}
</style>
