<template>
    <div class="layout">
        <SiteHeader />
        <router-view />
        <SiteFooter />
    </div>
</template>
<script setup>
import SiteHeader from '../header/index.vue'
import SiteFooter from '../footer/index.vue'

</script>
<style scoped>
.layout {
    width: 1440px;
    height: 100%;
}
</style>