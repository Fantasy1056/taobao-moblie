<template>
  <div class="home-icons">
    <div class="icons-wrapper">
      <a
        class="icons-item"
        v-for="(icon, index) in iconList"
        :key="icon.id"
        :class="{ ml: index !== 0 && index !== 5 }"
      >
        <img :src="icon.imgUrl" :alt="icon.title" class="icons-item-img" />
        <p class="icons-item-title">{{ icon.title }}</p>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { reqGetIconList } from '@/api'
interface IconList {
  id: number
  imgUrl: string
  title: string
}
// 图标列表数据
const iconList = ref<IconList[]>([])
// 获取图标列表数据
const getIconList = async () => {
  try {
    const { data: res } = await reqGetIconList()
    if (res.code === 200) {
      iconList.value = res.data
    }
  } catch (error) {}
}

getIconList()
</script>

<style lang="less" scoped>
.home-icons {
  width: 100%;
  height: 38.9333vw;
  margin: 14.6667vw 0 0;
  padding: 0 2.6667vw;
  .icons-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 2.6667vw;
    overflow-x: scroll;
    .icons-item {
      display: flex;
      flex-direction: column;
      width: 16.2667vw;
      height: 50%;
      .icons-item-img {
        width: 100%;
        height: 12.8vw;
      }
      .icons-item-title {
        margin-top: 0.5333vw;
        font-size: 3.7333vw;
        color: #666;
        text-align: center;
      }
    }
    .ml {
      margin-left: 2.6667vw;
    }
  }
}
</style>
