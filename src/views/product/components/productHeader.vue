<template>
  <div class="product-header">
    <div class="product-header-left">
      <div class="product-header-left-title">
        <span v-for="item in productInfo.title" :key="item">{{ item }}</span>
      </div>
      <div class="product-header-left-desc">
        {{ productInfo.desc?.toUpperCase() }}
      </div>
      <div class="product-header-left-desc-text" style="white-space: pre-line">
        {{ productInfo.descText }}
      </div>
      <div class="product-header-left-desc-button">
        <span></span>
        Request a Quote
      </div>
      <div class="product-header-left-desc-buttons">
        <div class="product-header-left-desc-buttons-button">Order Now</div>
        <div class="product-header-left-desc-buttons-button">View Specs →</div>
      </div>
    </div>
    <div
      :class="['product-header-right', productInfo.className]"
      :style="{ backgroundImage: `url(${productInfo.bgImgUrl})` }"
    ></div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const { productInfo = {} } = defineProps(["productInfo"]);
</script>
<style lang="less" scoped>
.product-header {
  display: flex;
  width: calc(100% - 280px);
  box-sizing: content-box;
  height: 651px;
  padding: 121px 140px;
  justify-content: space-between;
  align-items: center;
  background: #0a0a0a;
  &-left {
    display: flex;
    width: 654px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    &-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 40px;
      font-weight: 700;
      color: #fff;
      span:first-child {
        color: #fff;
        font-family: Montserrat;
        font-size: 96px;
        font-style: normal;
        font-weight: 500;
        line-height: 79.706px; /* 83.027% */
        letter-spacing: -1.249px;
      }
      span:last-child {
        color: #ff7a1a;
        font-family: Cormorant Garamond;
        font-size: 96px;
        font-style: italic;
        font-weight: 300;
        line-height: 79.706px;
        letter-spacing: -1.249px;
      }
    }
    &-desc {
      color: #ff7a1a;
      font-family: Montserrat;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    &-desc-text {
      color: #6b6b6b;
      font-family: Montserrat;
      font-size: 21.241px;
      font-style: normal;
      font-weight: 400;
      line-height: 38.234px; /* 180% */
    }
    &-desc-button {
      display: flex;
      padding: 8.641px 22.219px 8.641px 12.344px;
      align-items: center;
      gap: 9.875px;
      border-radius: 123.438px;
      border: 1.234px solid rgba(255, 122, 26, 0.25);
      background: rgba(255, 122, 26, 0.1);
      color: #ff7a1a;
      font-family: Syne;
      font-size: 16.047px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.617px;
      span {
        display: inline-block;
        width: 9.875px;
        height: 9.875px;
        border-radius: 4.938px;
        background: #ff7a1a;
      }
    }
    &-desc-buttons {
      display: flex;
      align-items: center;
      gap: 23px;
      &-button {
        display: flex;
        align-items: center;
        color: #fff;
        text-align: center;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.3px;
        display: flex;
        height: 54px;
        padding: 3px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(0, 0, 0, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:first-child {
          border-radius: 50px;
          background: #ff7a1a;
          border-width: 0px;
          &:hover {
            background: #ffb688;
            box-shadow: 0 0 20.1px 8px rgba(255, 122, 26, 0.34);
          }
        }
        &:last-child {
          &:hover {
            background: #ff7a1a;
          }
        }
      }
    }
  }
  &-right {
    display: flex;
    width: 900px;
    height: 651px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 40px;
    background-repeat: no-repeat;
    background-color: lightgray;
  }
  .a2 {
    background-position: -0.169px -33.361px;
    background-size: 135.574% 124.969%;
  }
  .x2 {
    background-position: 50% 50%;
    background-size: cover;
  }
  .d1 {
    background-position: 50% 50%;
    background-size: cover;
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
    background-position: 50% 50%;
    background-size: cover;
  }
}
</style>