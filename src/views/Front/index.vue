<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:56:55
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-05 11:37:47
-->
<template>
  <div class="content-wrapper">
    <router-view />
  </div>
  <div v-if="isShow" @closeFront="closeFront">
    <van-tabbar v-model="active" router class="fixed-tabbar">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="eye-o" to="/discover">发现</van-tabbar-item>
      <van-tabbar-item icon="fire-o" to="/live">直播</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/study">我的学习</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);
const isShow = ref(true)
// todo:这儿获取失败
const closeFront = (value) => {
  isShow.value = value
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  padding-bottom: 200px; // Adjust this value based on the actual height of your tabbar
}

.fixed-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999; // Adjust z-index as needed to ensure it's above other content
  margin-top: 100px;
}
</style>