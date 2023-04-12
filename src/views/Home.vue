<template>
  <div class="home">
    <Header></Header>
    <Icons></Icons>
    <Gonge></Gonge>
    <Recommend></Recommend>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/home/Header.vue'
import Icons from '@/components/home/Icons.vue'
import Gonge from '@/components/home/Gonge.vue'
import Recommend from '@/components/home/Recommend.vue'
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow: scroll;
}
</style>
