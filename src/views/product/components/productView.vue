<template>
  <div class="product-view">
    <div
      :class="['product-view-left', productInfo.className]"
      :style="{ backgroundImage: `url(${productInfo.imgUrl})` }"
    ></div>
    <div class="product-view-right">
      <div class="product-view-right-title">
        {{ productInfo.title }}
      </div>
      <div class="product-view-right-title1">
        {{ productInfo.title1 }}
      </div>
      <div class="product-view-right-desc">
        {{ productInfo.desc }}
      </div>
      <div class="product-view-right-buttons">
        <div class="product-view-right-buttons-button">Get a Quote</div>
        <div class="product-view-right-buttons-button">Become a Partner</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const { productInfo = {} } = defineProps(["productInfo"]);
</script>
<style lang="less" scoped>
.product-view {
  display: flex;
  height: 467px;
  width: calc(100% - 280px);
  padding: 120px 140px;
  align-items: center;
  gap: 161px;
  flex-shrink: 0;
  align-self: stretch;
  background: #0a0a0a;
  box-sizing: content-box;
  &-left {
    width: 873px;
    height: 467px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: lightgray;
  }
  .a2 {
    background-position: -0.323px 0.079px;
    background-size: 100% 124.64%;
  }
  .x2 {
    background-position: 50% 50%;
    background-size: cover;
  }
  .d1 {
    background-position: -188.904px -1009.197px;
    background-size: 125.964% 353.169%;
  }
  .d1max {
    background-position: 50% 50%;
    background-size: cover;
  }
  .d1promax {
    background-position: 50% 50%;
    background-size: cover;
  }
  .g1 {
    background-position: -47.489px -26.042px;
    background-size:  115.999% 121.976%;
  }
  &-right {
    &-title {
      color: #fff;
      font-family: Montserrat;
      font-size: 88px;
      font-style: normal;
      font-weight: 400;
      line-height: 83.6px; /* 95% */
      letter-spacing: -2px;
    }
    &-title1 {
      color: #ff7a1a;
      font-family: Cormorant Garamond;
      font-size: 88px;
      font-style: italic;
      font-weight: 300;
      line-height: 83.6px; /* 95% */
      letter-spacing: -2px;
    }
    &-desc {
      color: #fff;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 19px 0;
    }
    &-buttons {
      display: flex;
      align-items: center;
      gap: 13px;
      &-button {
        display: flex;
        height: 54px;
        padding: 3px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #fff;
        text-align: center;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.3px;
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(0, 0, 0, 0);
        cursor: pointer;
        margin: 52px 0px;
        &:first-child {
          border-radius: 50px;
          background: #ff7a1a;
          border-width: 0px;
          &:hover{
            background: #ffb688;
            box-shadow: 0 0 20.1px 8px rgba(255, 122, 26, 0.34);
          }
        }
        &:last-child{
          &:hover{
            background: #ff7a1a;
          }
        }
      }
    }
  }
}
</style>