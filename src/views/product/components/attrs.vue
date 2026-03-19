<template>
  <div class="attrs">
    <div :class="['attrs-left', `attrs-left-${attrs.children?.length}`]">
      <div class="attrs-left-top">
        <span></span>
        Tech Specs
      </div>
      <div class="attrs-left-title">{{ attrs.title }}</div>
      <div class="attrs-left-title1">{{ attrs.title1 }}</div>
      <div class="attrs-left-desc">
        {{ attrs.desc }}
      </div>
      <div class="attrs-left-bg">
        <div
          :class="['attrs-left-bg-top', attrs.className]"
          :style="{ backgroundImage: `url(${attrs.imgUrl})` }"
        ></div>
        <div class="attrs-left-bg-bottom"></div>
      </div>
    </div>
    <div :class="['attrs-right', `attrs-right-${attrs.children?.length}`]">
      <div
        class="attrs-right-list"
        v-for="item in attrs.children"
        :key="item.label"
      >
        <div class="attrs-right-list-item" v-for="a in item" :key="a.label">
          <div class="attrs-right-list-item-title">
            {{ a.label }}
          </div>
          <div
            class="attrs-right-list-item-value"
            v-for="b in a.children"
            :key="b.label"
          >
            <span>{{ b.label }}</span>
            <span>{{ b.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const { attrs = [] } = defineProps(["attrs"]);
</script>
<style lang="less" scoped>
.attrs {
  display: flex;
  height: 1194px;
  padding: 60px 140px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  &-left {
    align-self: flex-start;
    width: 599px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16.656px;
    flex: 1 0 0;
    &-1 {
      .attrs-left-bg {
        display: flex;
        width: 951.963px;
        height: 621px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 6.521px;
        align-self: stretch;
        &-top {
          display: flex;
          width: 613.241px;
height: 610.235px;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          gap: 6.521px;
          position: absolute;
          left: 40px;
          align-self: stretch;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
        }
        &-bottom {
          width: 692px;
          height: 235.076px;
          border-radius: 17.389px;
          background: #1a1e1d;
          left: 0;
          transform: translateX(0);
        }
      }
    }
    &-bg {
      width: 555.635px;
      height: 445.427px;
      flex-shrink: 0;
      position: relative;
      .x2Img1 {
        background-position: 0px 138.8px;
        background-size: 100% 159.538%;
      }
      .d1MaxImg1{
        background-position: -220.697px 0px ;
        background-size: 177.778% 114.713%;
      }
      .d1ProMaxImg1{
        background-position: -238.482px 0px ;
        background-size: 177.778% 100.493% ;
      }
      .g1Img1{
        background-position: 50% -123%;
        background-size: 100% 120%;
      }
      &-top {
        width: 531.337px;
        height: 531.337px;
        aspect-ratio: 1/1;
        bottom: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        position: absolute;
        z-index: 1;
      }
      &-bottom {
        position: absolute;
        bottom: 0;
        width: 531.145px;
        height: 189.038px;
        border-radius: 17.389px;
        background: #1a1e1d;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &-title {
      color: #0a0a0a;
      font-family: Cormorant Garamond;
      font-size: 87.125px;
      font-style: normal;
      font-weight: 300;
      line-height: 92.25px; /* 105.882% */
      letter-spacing: -1.922px;
    }
    &-title1 {
      color: #ff7a1a;
      font-family: Cormorant Garamond;
      font-size: 87.125px;
      font-style: italic;
      font-weight: 300;
      line-height: 92.25px;
      letter-spacing: -1.922px;
    }
    &-desc {
      color: #6b6b6b;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 36.9px; /* 205% */
    }
    &-top {
      display: flex;
      align-items: center;
      color: #ff7a1a;
      font-family: Syne;
      font-size: 14.094px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 3.203px;
      text-transform: uppercase;
      span {
        width: 28.188px;
        height: 1.922px;
        display: inline-block;
        background: #ff7a1a;
        margin-right: 13px;
      }
    }
  }
  &-right {
    display: flex;
    gap: 23px;
    align-items: flex-start;
    &-1 {
      .attrs-right-list-item-title {
        display: flex;
        padding: 16.656px 28.188px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        height: 50px;
        color: #ff7a1a;
        font-family: Syne;
        font-size: 12.813px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.563px;
        text-transform: uppercase;
        border-bottom: 1.281px solid rgba(0, 0, 0, 0.07);
        background: #fafafa;
      }
      .attrs-right-list-item-value {
        display: flex;
        width: 766.187px;
        padding: 23.063px 28.175px 23.063px 28.188px;
        justify-content: space-between;
        align-items: center;
        height: 68px;
        span {
          &:first-child {
            color: #6b6b6b;
            font-family: Montserrat;
            font-size: 16.656px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
          &:last-child {
            color: #0a0a0a;
            text-align: right;
            font-family: Montserrat;
            font-size: 17.938px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
      }
    }
    &-list {
      border: 0.85px solid rgba(0, 0, 0, 0.07);
      border-radius: 10px;
      &-item {
        &-title {
          height: 32px;
          display: flex;
          padding: 11.045px 18.692px;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          color: #ff7a1a;
          font-family: Syne;
          font-size: 8.496px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.699px;
          text-transform: uppercase;
          border-bottom: 0.85px solid rgba(0, 0, 0, 0.07);
          background: #fafafa;
        }
        &-value {
          display: flex;
          width: 508.071px;
          padding: 15.293px 18.683px 15.293px 18.692px;
          height: 44.6px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 0.85px solid rgba(0, 0, 0, 0.07);
          span {
            &:first-child {
              color: #6b6b6b;
              font-family: Montserrat;
              font-size: 11.045px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }

            &:last-child {
              color: #0a0a0a;
              text-align: right;
              font-family: Montserrat;
              font-size: 11.895px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
        }
      }
    }
  }
}
</style>