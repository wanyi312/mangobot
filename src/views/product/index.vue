<template>
  <div>
    <ProductHeader :productInfo="productInfo.header" />
    <BgImgs :bgImgs="productInfo.bgImgs" />
    <Bg :bg="productInfo.bgClassName" />
    <Capabilities :capabilities="productInfo.capabilities" />
    <Ideal :ideal="productInfo.ideal" />
    <ProductView :productInfo="productInfo.view" />
    <Attrs :attrs="productInfo.attrs" />
  </div>
</template>
<script setup>
import Bg from "./components/bg.vue";
import BgImgs from "./components/bgImgs.vue";
import ProductHeader from "./components/productHeader.vue";
import ProductView from "./components/productView.vue";
import Ideal from "./components/ideal.vue";
import Attrs from "./components/attrs.vue";
import Capabilities from "./components/capabilities.vue";
import config from "./config";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const productInfo = ref({});

watch(
  () => route.params.id,
  (newVal) => {
    console.log(config.productHeader, newVal.toUpperCase());
    productInfo.value = {
      header: config.productHeader[newVal.toUpperCase()],
      view: config.productView[newVal.toUpperCase()],
      bgImgs: config.bgImgs[newVal.toUpperCase()],
      ideal: config.ideal[newVal.toUpperCase()],
      attrs: config.attrs[newVal.toUpperCase()],
      capabilities : config.capabilities[newVal.toUpperCase()],
      bgClassName : newVal.toUpperCase()
    };
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less" scoped>
</style>