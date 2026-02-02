<template>
  <div class="video">
    <div class="video-container">
      <div class="video-container-text">
        <div class="video-container-text-title">{{ video.title }}</div>
        <div
          :class="[
            'video-container-text-text',
            !!video.textRight ? 'video-container-text-text-right' : '',
          ]"
        >
          <div
            class="video-container-text-text-item"
            v-for="item in video.text"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="video-container-text-right" v-if="video.textRight">
        {{ video.textRight.map(item => item).join('\n') }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { video } = defineProps({
  video: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.video {
  display: flex;
  width: 1369px;
  height: 713px;
  padding: 10.934px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px auto 60px;
  border-radius: 29.157px;
  border-top: 1.822px solid #2b2b2b;
  background: #a5a5a5;
  &-container {
    width: 1343px;
    height: 691px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.82) 100%
      ),
      #c4c4c4;
    position: relative;
    &-text {
      position: absolute;
      bottom: 44px;
      left: 36px;
      gap: 22px;
      display: flex;
      flex-direction: column;
      &-right {
        width: 457px;
        position: absolute;
        bottom: 47px;
        right: 26px;
        color: #fff;
        text-align: right;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
      }
      &-title {
        color: #fff;
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
      &-text {
        max-width: 927px;
        gap: 22px;
        display: flex;
        flex-direction: column;
        color: #fff;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
        &-right{
            width: 587px;
        }
      }
    }
  }
}
</style>