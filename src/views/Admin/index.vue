<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-27 20:17:17
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-28 15:49:17
-->
<template>
    <div class="admin">
        <div class="countdown">
            <van-button round type="info">跳过{{ count }}秒</van-button>
        </div>
        <div class="enterHome">
            <van-button round type="info" @click="jumpOver">进入首页</van-button>
        </div>

    </div>



</template>

<script setup>
 
import { computed, onMounted, ref } from "vue"
import { useRouter } from "vue-router";

const count = ref(5)
const router = useRouter()
onMounted(() => {
    const countdownInterval = setInterval(() => {
        count.value -= 1;
        if (count.value === 0) {
            clearInterval(countdownInterval);
            router.replace('/login')
        }
    }, 1000);
});
const jumpOver = () => {
    const jumpSetTimout = setTimeout(() => {
        router.replace('/login')
        clearTimeout(jumpSetTimout);
    }, 500);
    // router.replace('/login')
}

</script>

<style lang="scss" scoped>
.admin {
    width: 100%;
    height: 100%;
    background-image: url('../../../public/educate.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    >.countdown {
        .van-button {
            width: 500px;
            height: 90px;
            position: absolute;
            margin: auto;
            top: -90%;
            left: 70%;
            bottom: 0;
            right: 0;
        }
    }

    >.enterHome {
        .van-button {
            width: 500px;
            height: 100px;
            position: absolute;
            margin: auto;
            top: 80%;
            left: 0;
            bottom: 0;
            right: 0;
        }

    }

}
</style>