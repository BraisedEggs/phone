<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-07 14:06:00
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-07 15:01:50
-->

<template>
    <div class="message">
        <van-icon name="scan" @click="showCard" size="30" />
        <div>
            <van-icon name="chat-o" size="30" />
            <van-icon name="setting-o" size="30" />
        </div>

    </div>
    <van-dialog v-model:show="show" title="标题" show-cancel-button>
        <QRCode />
    </van-dialog>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
const showCard = () => {
    show.value = true
}
</script>

<style lang="scss" scoped>
.message {
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    div{
    .van-icon{
    margin: 0 40px;
    }
    }
}
</style>