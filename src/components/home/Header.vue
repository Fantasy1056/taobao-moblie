<template>
  <div class="home-header">
    <div class="logo">
      <img
        src="https://gw.alicdn.com/imgextra/i4/O1CN019XWXNq1aAPOVMYSiu_!!6000000003289-2-tps-167-63.png"
        alt=""
      />
    </div>
    <div class="search">
      <div class="search-input">
        <span class="placeholder">123</span>
        <div class="search-btn">搜索</div>
      </div>
    </div>
    <div class="qd">
      <img
        src="https://gw.alicdn.com/imgextra/i4/O1CN01ftum4629SHP6bCqTm_!!6000000008066-2-tps-99-99.png"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 13.0667vw;
  z-index: 999;
  background-color: #f4f4f4;
  .logo {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21.467vw;
    height: 100%;
    img {
      display: block;
      width: 14.8vw;
      height: 5.6vw;
    }
  }
  .search {
    position: relative;
    float: left;
    width: 62.6667vw;
    height: 9.3333vw;
    margin-top: 1.5vw;
    .search-input {
      width: 100%;
      height: 100%;
      border: 1px solid #ff5000;
      border-radius: 5.3333vw;
      .placeholder {
        display: block;
        margin: 1.5vw 0 1.5vw 3vw;
        color: #666;
        font-size: 4.2667vw;
      }
      .search-btn {
        position: absolute;
        right: 0.6vw;
        top: 0.5vw;
        width: 17.0667vw;
        height: 8.5333vw;
        border-radius: 5.3333vw;
        background: linear-gradient(to right, #ff8d0e, #ff5000);
        color: #fff;
        text-align: center;
        line-height: 8.5333vw;
        font-size: 3.7333vw;
      }
    }
  }
  .qd {
    float: left;
    margin-top: 1.5vw;
    margin-left: 3.5vw;
    width: 8.8vw;
    height: 8.8vw;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
