<template>
    <div class="homePage">
        <Robot />
        <!-- <Duba />
        <World />
        <Soul /> -->
        <Tabs />
    </div>
</template>
<script setup>
import Duba from '../components/duba.vue'
import Soul from '../components/soul.vue'
import World from '../components/world.vue'
import Robot from '../components/robot.vue'
import Tabs from '../components/tabs.vue'
</script>
<style lang="less" scoped>
.homePage{
    width: 100%;
}
</style>