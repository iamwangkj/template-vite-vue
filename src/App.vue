<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <van-tabbar route safe-area-inset-bottom>
    <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="comment">关于</van-tabbar-item>
    <van-tabbar-item replace to="/msg" icon="bag">消息</van-tabbar-item>
    <van-tabbar-item replace to="/me" icon="user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
</script>

<style>
#app {
  box-sizing: border-box;
  padding-top: 10px;
}
</style>
