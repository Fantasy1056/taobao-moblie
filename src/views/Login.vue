<template>
  <div class="login">
    <div class="login-container">
      <div class="logo">
        <div class="tb-logo"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .login-container {
    width: 100%;
    overflow: hidden;
    padding: 0 5.3333vw;
    margin-bottom: 2.6667vw;
    .logo {
      width: 100%;
      height: 21.3333vw;
      .tb-logo {
        background: url(https://gw.alicdn.com/tfs/TB1puqzr6MZ7e4jSZFOXXX7epXa-160-160.png)
          no-repeat;
        background-size: contain;
        width: 21.3333vw;
        height: 21.3333vw;
        margin: 10.6667vw auto 0;
      }
    }
  }
}
</style>
