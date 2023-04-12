<template>
  <div class="footer">
    <div class="tab" v-for="item in footerList" :key="item.id">
      <div class="home-selected" v-if="item.id === 1 && index === 1"></div>
      <div
        class="tool-bar"
        :style="{ backgroundImage: `url(${item.selectedIcon})` }"
        v-if="index === item.id && item.selectedIcon"
      ></div>
      <div
        class="tool-bar"
        :style="{ backgroundImage: `url(${item.defaultIcon})` }"
        v-else
      ></div>
      <p class="text" :class="{ selected: index === item.id }">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { reqGetFooterList } from '@/api'
interface Footer {
  defaultIcon: string
  id: number
  selectedIcon: string
  title: string
}

const footerList = ref<Footer[]>([])

const index = ref(2)

const getFooterlist = async () => {
  const { data: res } = await reqGetFooterList()

  if (res.code === 200) {
    footerList.value = res.data
  }
}

getFooterlist()
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 12.2667vw;
  background-color: #fff;
  .tab {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    margin: 1.0667vw 0;
    height: 9.6vw;
    .home-selected {
      position: absolute !important;
      width: 9.6vw;
      height: 9.6vw;
      background-image: linear-gradient(90deg, #ff8002 0%, #ff5900 100%);
      border-radius: 50%;
      position: relative;
      z-index: 9;
      &::after {
        content: '';
        display: inline-block;
        height: 9.6vw;
        width: 9.6vw;
        background: url(https://img.alicdn.com/imgextra/i1/O1CN01oAxBQ81qF1EZtn4Rq_!!6000000005465-2-tps-108-108.png)
          no-repeat;
        background-size: 9.6vw 9.6vw;
        transform: translateY(-50%);
      }
    }
    .tool-bar {
      height: 20px;
      width: 20px;
      color: #5d656b;
      background-size: 20px 20px;
      background-repeat: no-repeat;
      overflow: visible;
    }
    .text {
      font-size: 3.2vw;
      transform: scale(0.83333333);
      text-align: center;
      color: #666666;
      line-height: 2.6667vw;
      margin: 0.5333vw 0 0;
    }
    .selected {
      color: #ff5900;
    }
  }
}
</style>
