<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <van-tabbar route safe-area-inset-bottom>
    <van-tabbar-item replace to="/" icon="home-o">home</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="search">about</van-tabbar-item>
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
