<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-29 14:52:43
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 09:18:18
-->
<template>
    <ul class="course">
        <li v-for="item in sourceList" :key="item.imgId" @click="enterInterface(item.Descriptor
        )">
            <img :src='item.img' alt="">
            <span>{{ item.text }}</span>
        </li>

    </ul>
</template>

<script setup>
import { ref } from "vue";
import children from "@/router/router.js"
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps(['sourceList'])

const emit = defineEmits(['routerData'])
const enterInterface = (value) => {
    emit('routerData', value);
}
</script>

<style lang="scss" scoped>
.course {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fff;

    li {
        width: 21%;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        font-size: 60px;

        span {
            margin-top: 50px;

        }
    }
}
</style>