<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 19:57:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 13:55:48
-->
<template>
    <div class="loginhome">
        <!-- 头部logo -->
        <logoVue />
        <!-- 登录页面 -->
        <loginVue :sendOption="sendOption" />
        <!-- 其他登录 -->
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
            其他登录方式
        </van-divider>
        <otherloginVue />
        <!-- 同意书 -->

        <argeeVue class="agreevue" @send-selected="sendSelected" />
    </div>
</template>

<script setup>
import logoVue from "./ui/logo.vue";
import loginVue from "./ui/login.vue"
import otherloginVue from "./ui/otherlogin.vue";
import argeeVue from "./ui/argee.vue";
import { ref } from "vue";

// 接收选中的值
const sendOption = ref()
const sendSelected = (value) => {
    sendOption.value = value
}
</script>

<style lang="scss" scoped>
.loginhome {
    width: 100%;
}

.agreevue {
    position: absolute;
    margin: auto;
    top: 90%;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>