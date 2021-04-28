<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div @click="login">点击模拟登录效果</div>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'Home',
  methods: {
    login() {
      login({
        username: 'wugang',
        password: '123456'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: $yellow;
}
</style>
