<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-29 14:28:26
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 10:38:53
-->
<template>
    <div>
        <div class="topBtn">
            <div type="" @click="routerBnt('recommend')">推荐</div>
            <div type="" @click="routerBnt('focuson')">关注</div>
        </div>

        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

// 跳转到每一个对应的路由页面
const router = useRouter()
const routerBnt = (value) => {
    router.replace("/discover/" + value)
}
</script>

<style lang="scss" scoped>
.topBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    >div {
        border: 1px solid #000;
        font-family: 'ZCOOL KuaiLe', cursive;
        margin: 0 2px;
        width: 200px;
        text-align: center;
        height: 100px;
        line-height: 100px;
        transition: background-color 0.3s, box-shadow 0.3s;
        /* Adding transition for smooth effect */

        &:nth-child(2) {
            border-top-right-radius: 200px;
            border-bottom-right-radius: 200px;
        }

        &:nth-child(1) {
            border-top-left-radius: 200px;
            border-bottom-left-radius: 200px;
            border-right: 0;
        }

        &:hover {
            background-color: skyblue;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            /* Adding box-shadow on hover */
        }
    }
}
</style>

