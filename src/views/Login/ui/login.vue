<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-28 15:55:41
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 11:33:11
-->
<template>
    <van-tabs v-model="active" class="loginHome">
        <van-tab title="手机验证码登录">
            <phoneVue :sendOption=sendOption />
        </van-tab>
        <van-tab title="密码登录">
            <mesVue :sendOption="sendOption" />
        </van-tab>
    </van-tabs>
    {{ }}
</template>

<script setup>
import { defineProps, ref } from "vue";
import mesVue from "./mes.vue";
import phoneVue from "./phone.vue";


const active = ref()
// 接受数据并且传给子组件
const props = defineProps(['sendOption']);
</script>

<style lang="scss" scoped>
.loginHome {
    margin: 300px 100px;
}
</style>