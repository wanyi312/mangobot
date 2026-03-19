<template>
  <div class="ideal">
    <div class="ideal-title">Ideal Applications</div>
    <div class="ideal-content">
      <div class="ideal-content-item" v-for="item in ideal" :key="item.title">
        <img :src="item.imgUrl" />
        <div>
          <div class="ideal-content-item-title">
            {{ item.title }}
          </div>
          <div class="ideal-content-item-desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const { ideal = [] } = defineProps(["ideal"]);
</script>
<style lang="less" scoped>
.ideal {
  height: 527px;
  display: flex;
  padding: 60px 140px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  &-title {
    color: #1a1e1d;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;
    font-family: Montserrat;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px; /* 116.667% */
    letter-spacing: -2px;
  }
  &-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    &-item {
      display: flex;
      width: 251.458px;
      height: 303.483px;
      padding: 28.903px 0 23.123px 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      flex-shrink: 0;
      border-radius: 0 0 0 0;
      border-top: 0.723px solid #c1c5bf;
      &:hover {
        border-top: 0.723px solid #ef536b;
      }
      img {
        width: 51px;
        height: 51px;
        flex-shrink: 0;
        aspect-ratio: 1/1;
      }
      &-title {
        color: #1a1e1d;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        font-family: Manrope;
        font-size: 34.684px;
        font-style: normal;
        font-weight: 600;
        line-height: 46.968px; /* 135.417% */
        letter-spacing: -1.445px;
        white-space: pre-wrap;
      }
      &-desc {
        margin-top: 9px;
        white-space: pre-wrap;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        align-self: stretch;
        overflow: hidden;
        color: #9a9a9a;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        text-overflow: ellipsis;
        font-family: Manrope;
        font-size: 13.006px;
        font-style: normal;
        font-weight: 400;
        line-height: 20.955px; /* 161.111% */
      }
    }
  }
}
</style>