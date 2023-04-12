<template>
  <div class="home-gonge">
    <div class="gonge-wrapper">
      <div class="col-line"></div>
      <div class="row-line"></div>
      <div class="gonge-item" v-for="gonge in gongeList" :key="gonge.id">
        <div class="item-hd">
          <h5>{{ gonge.title }}</h5>
          <p :style="{ 'background-color': gonge.tagColor }">{{ gonge.tag }}</p>
        </div>
        <div class="item-l">
          <img :src="gonge.items[0].imgUrl" :alt="gonge.items[0].type" />
        </div>
        <div class="item-r">
          <img :src="gonge.items[1].imgUrl" :alt="gonge.items[1].type" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { reqGetGongeList } from '@/api'
interface GongeList {
  id: number
  tag: string
  tagColor: string
  title: string
  items: {
    id: number
    imgUrl: string
    type: string
  }[]
}
const gongeList = ref<GongeList[]>([])

const getGongeList = async () => {
  try {
    const { data: res } = await reqGetGongeList()

    if (res.code === 200) {
      gongeList.value = res.data
    }
  } catch (error) {}
}
getGongeList()
</script>

<style lang="less" scoped>
.home-gonge {
  position: relative;
  width: 100%;
  height: 48.8vw;
  margin-top: 2.6667vw;
  padding: 0 2.6667vw;
  .gonge-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 2.6667vw;
    .gonge-item {
      position: relative;
      display: flex;
      align-items: end;
      width: 50%;
      height: 50%;
      .item-l {
        position: relative;
        margin-top: 1.8667vw;
        margin-left: 3.4667vw;
        img {
          display: block;
          width: 16.8vw;
          height: 16.8vw;
        }
      }
      .item-r {
        position: relative;
        margin-top: 1.8667vw;
        margin-left: 4.4vw;
        width: 21.5vw;
        height: 21.5vw;
        img {
          display: block;
          width: 21.5vw;
          height: 21.5vw;
        }
      }
      .item-hd {
        position: absolute;
        top: 1.3333vw;
        left: 0.8vw;
        display: flex;
        align-items: center;
        font-size: 4.2667vw;
        z-index: 99;
        h5 {
          padding-left: 0.8vw;
          font-size: 4vw;
        }
        p {
          padding: 0 0.3vw;
          margin: 0 0.3vw;
          height: 3.7333vw;
          line-height: 3.7333vw;
          text-align: center;
          color: #fff;
          font-size: 3.2vw;
          border-radius: 1vw;
        }
      }
    }
    .col-line,
    .row-line {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 0.13vw;
      height: 90%;
      background-color: #eee;
    }
    .row-line {
      height: 0.13vw;
      width: 95%;
    }
  }
}
</style>
