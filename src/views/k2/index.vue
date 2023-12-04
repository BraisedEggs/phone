<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-01 14:37:20
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 17:16:11
-->
<template>
    <div>
        <!-- 标题 -->
        <van-nav-bar title="K2教育" left-arrow @click-left="onClickLeft" />
        <!--年级 搜索 地区 -->
        <van-nav-bar>
            <template #left>
                <div @click="switchGrade">
                    {{ grade }}
                    <van-icon name="arrow-down" v-if="isicon" />
                    <van-icon name="arrow-up" v-else />
                </div>
            </template>
            <template #title>
                <van-search v-model="searchValue" placeholder="请输入搜索关键词" input-align="center" />
            </template>
            <template #right>
                <div @click="switchArea">
                    {{ city }}
                    <van-icon name="arrow-down" v-if="isareaicon" />
                    <van-icon name="arrow-up" v-else />
                </div>
            </template>
        </van-nav-bar>
        <!-- 课程 -->
        <van-tabs v-model:active="activeName">
            <van-tab title="推荐" name="a">内容 1</van-tab>
            <van-tab title="数学" name="b">内容 2</van-tab>
            <van-tab title="语文" name="c">内容 3</van-tab>
            <van-tab title="英语" name="d">内容 4</van-tab>
            <van-tab title="物理" name="e">内容 5</van-tab>
            <van-tab title="化学" name="f">内容 6</van-tab>
            <van-tab title="生物" name="g">内容 7</van-tab>
        </van-tabs>
        <!-- 内容 -->
    </div>
    <van-popup v-model:show="showCenter">
        <GradeVue @savegrade="savegrade" />
    </van-popup>
    <van-popup v-model:show="showBottom" round position="bottom" :style="{ height: '100%' }">
        <areaVue @sendcityitem="sendcityitem" />
    </van-popup>
</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import areaVue from "./ui/area.vue";
import GradeVue from "./ui/Grade.vue";

// 返回上一级
const router = useRouter()
const emit = defineEmits(['goback'])
const onClickLeft = () => {
    emit('goback')
}

// 年级切换
const isicon = ref(true)
const showCenter = ref(false);
const switchGrade = () => {
    isicon.value = false
    showCenter.value = true
}
// 选中搞得grade
const grade = ref("高三")
const savegrade = (value) => {
    isicon.value = true
    showCenter.value = false
    grade.value = value
}
// 地区
const isareaicon = ref(true)
const showBottom = ref(false)
const switchArea = () => {
    isareaicon.value = false
    showBottom.value = true
}
// 接收选中的地区
const city = ref("北京")
const sendcityitem = (value) => {
    isareaicon.value = true
    showBottom.value = false
    city.value = value
}

// 搜索
// todo:这是搜索框没有写
const searchValue = ref()
</script>

<style lang="scss" scoped></style>