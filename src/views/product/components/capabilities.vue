<template>
  <div class="capabilities">
    <div class="capabilities-title">Key Capabilities</div>
    <div class="capabilities-content">
      <div :class="['capabilities-content-left', capabilities.className]">
        <div
          class="capabilities-content-left-top"
          :style="{ backgroundImage: `url(${capabilities.topImgUrl})` }"
        ></div>
        <div class="capabilities-content-left-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="629"
            height="629"
            viewBox="0 0 629 629"
            fill="none"
          >
            <path
              d="M-0.487305 0H628.938V629.425H-0.487305V0Z"
              fill="#F7F8FA"
            />
          </svg>
        </div>
        <div
          class="capabilities-content-left-bottom"
          :style="{ backgroundImage: `url(${capabilities.bottomImgUrl})` }"
        ></div>
      </div>
      <div class="capabilities-content-right">
        <div
          class="capabilities-content-right-item"
          v-for="(item, index) in capabilities.children"
          :key="item.label"
        >
          <div class="capabilities-content-right-item-title">
            {{ item.label }}
          </div>
          <div
            class="capabilities-content-right-item-value"
            v-for="child in item.children"
            :key="child.label"
          >
            <img src="../assets/icon.png" alt="" />
            <span>{{ child }}</span>
          </div>
          <div
            v-if="index !== capabilities.children.length - 1"
            class="capabilities-content-right-item-hr"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { capabilities } = defineProps({
  capabilities: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.capabilities {
  padding: 0 140px;
  &-title {
    display: flex;
    height: 227px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    align-self: stretch;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      position: relative;
      width: 703px;
      height: 703px;
      &.a2Capabilities1 {
        .capabilities-content-left-top {
          background-size: 194%;
          background-position: 105% 49%;
        }
        .capabilities-content-left-bottom {
          background-size: 138%;
          background-position: 83% 4%;
        }
      }
      &.x2Capabilities1 {
        .capabilities-content-left-top {
          background-size: 295%;
          background-position: 52% 47%;
        }
        .capabilities-content-left-bottom {
          background-size: 159%;
          background-position: 68% 10%;
        }
      }

      &.g1Capabilities1 {
        .capabilities-content-left-top {
          background-size: 279%;
          background-position: 50% 16%;
        }
        .capabilities-content-left-bottom {
          background-size: 190%;
          background-position: 70% 32%;
        }
      }

      &-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 384.18px;
        height: 285.391px;
        border-radius: 16.465px;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        border-radius: 16.465px;
        box-shadow: 0 0 0 5.488px #fff,
          0 16.465px 131.719px 0 rgba(6, 11, 19, 0.1);
      }
      &-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 614.126px;
        height: 614.126px;
        background-image: url(./assets/keys-bg.png);
        background-size: cover;
        background-position: 50% 50%;
        border-radius: 50%;
        z-index: -1;
        svg {
          width: 629.425px;
          height: 629.425px;
          fill: #f7f8fa;
          border-radius: 50%;
        }
      }
      &-bottom {
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 526.875px;
        height: 351.25px;
        border-radius: 16.465px;
        box-shadow: 0 0 0 5.488px #fff,
          0 16.465px 131.719px 0 rgba(6, 11, 19, 0.1);
      }
    }
    &-right {
      &-item {
        padding: 40px 0 0 0;

        &-title {
          color: #060b13;
          font-family: Montserrat;
          font-size: 32px;
          font-style: normal;
          font-weight: 500;
          line-height: 37px; /* 115.625% */
          margin-bottom: 28px;
        }
        &-hr {
          margin-top: 39px;
          width: 673px;
          height: 1px;
          background: #9a9a9a;
        }
        &-value {
          display: flex;
          align-items: center;
          margin-top: 14px;
          img {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin-right: 15px;
          }
          span {
            color: #363d4f;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 21px */
            letter-spacing: -0.14px;
            white-space: pre-wrap;
          }
        }
      }
    }
  }
}
</style>