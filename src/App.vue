<template>
  <router-view />
  <Footer v-if="useRoute().meta.isShowFooter"></Footer>
</template>
<script lang="ts" setup>
import Footer from './components/common/Footer.vue'
import { useRoute } from 'vue-router'
</script>
<style lang="less"></style>
