<template>
  <div class="productPage">
    <div class="productPage-header">
      <div class="productPage-header-title">Meet the Mangobot Family</div>
      <div class="productPage-header-desc">
        Four distinct personalities. One unified purpose: to deliver humanoid
        intelligence exactly where you need it. Each robot represents the
        pinnacle of its category, specialized, sophisticated, and designed to
        excel in its domain.
      </div>
      <div class="productPage-header-video">
        <div class="productPage-header-video-play">
          <Play />
        </div>
      </div>
    </div>
    <Tabs />
    <ProductDesc :productDesc="productInfo?.productDesc" />
    <Capabilities :capabilities="productInfo?.capabilities" />
    <Applications :application="productInfo?.Applications" :descPath="productInfo?.descPath" />
    <Fit />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Applications from "../components/Applications.vue";
import ProductDesc from "../components/productDesc.vue";
import Tabs from "../components/tabs.vue";
import Capabilities from "../components/capabilities.vue";
import { products } from "@/config";
import { useRoute } from "vue-router";
import Fit from "../components/fit.vue";
const route = useRoute();
const productInfo = computed(() => {
  return products.find((item) => item.path === route.path);
});
</script>
<style lang="less" scoped>
.productPage-header {
  &-title {
    padding-top: 90px;
    text-align: center;
    color: var(--Color-4, #1a1e1d);
    text-align: center;
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
  &-video {
    margin: 79px auto 108px;
    display: flex;
    height: 560px;
    width: 1177px;
    box-sizing: content-box;
    padding: 10.934px;
    flex-direction: column;
    align-items: flex-start;
    gap: -184.057px;
    border-radius: 29.157px;
    border-top: 1.822px solid #2b2b2b;
    background: #a5a5a5;
    &-play {
      width: 1174px;
      height: 560px;
      flex-shrink: 0;
      background: url("@/assets/productbg.png") lightgray 50% / cover no-repeat;
    }
  }
  &-desc {
    margin: 35px auto 0;
    width: 766px;
    color: #000;
    text-align: center;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;

    /* H5 */
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px; /* 161.111% */
  }
}
</style>