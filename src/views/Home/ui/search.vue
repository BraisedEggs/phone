<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-29 14:40:56
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 17:15:57
-->
<template>
    <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </div>
</template>

<script setup>
import { ref } from "vue";
// todo:这是搜索框没有写
const value = ref()
</script>

<style lang="scss" scoped></style>