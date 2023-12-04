<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:56:55
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 14:17:09
-->
<template>
  <router-view />
  <van-tabbar v-model="active" router>
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="eye-o" to="/discover">发现</van-tabbar-item>
    <van-tabbar-item icon="fire-o" to="live">直播</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="study">我的学习</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);
</script>

<style lang="scss" scoped>
.van-tabbar {
  overflow: hidden;
  margin-top: 100px;
}
</style>