<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-01 14:37:20
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-05 13:43:52
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
        <van-tabs v-model:active="activeName" @click="clickHandler">
            <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title" :name="tab.name">
                <template v-for="item, key in source" :key="key" class="sourceitem">
                    <BarTwoCard :CardData="item" @click="goTovideo(item.sourceid)" />
                </template>
                <template v-for="value, key in livesource" :key="key">
                    <BarOneCard :livesourceData="value" @click="goTovideo(value.liveid)" />
                </template>
            </van-tab>
        </van-tabs>


    </div>
    <van-popup v-model:show="showCenter">
        <GradeVue @savegrade="savegrade" />
    </van-popup>
    <van-popup v-model:show="showBottom" round position="bottom" :style="{ height: '100%' }">
        <areaVue @sendcityitem="sendcityitem" />
    </van-popup>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import areaVue from "./ui/area.vue";
import GradeVue from "./ui/Grade.vue";
import { useStudyRecommendApi } from "@/services/k2.js"
import deepCopy from '@/tools/deepCopy.js'

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



// 默认选中推荐
const activeName = ref('recommend')
const tabs = ref([
    { title: '推荐', name: 'recommend' },
    { title: '数学', name: 'math' },
    { title: '语文', name: 'Chinese' },
    { title: '英语', name: 'English' },
    { title: '物理', name: 'physics' },
    { title: '化学', name: 'Chemical' },
    { title: '生物', name: 'biology' },
])
const livesource = ref()
const source = ref()
onMounted(async () => {
    obtainData("recommend")
})
const clickHandler = (value) => {
    switch (value) {
        case 'recommend':
            obtainData("recommend")
            break;
        case 'math':
            obtainData("math")
            break;
        case 'Chinese':
            obtainData("Chinese")
            break;
        case 'English':
            obtainData("English")
            break;
        case 'physics':
            obtainData("physics")
            break;
        case 'Chemical':
            obtainData("Chemical")
            break;
        case 'biology':
            obtainData("biology")
            break;
        default:
            obtainData("obtainData")
            break;
    }
}
//获取数据
const obtainData = async () => {
    livesource.value = null;
    source.value = null;
    let recommendRet = await useStudyRecommendApi("recommend")
    livesource.value = deepCopy(recommendRet.data.recommend.livesource)
    source.value = deepCopy(recommendRet.data.recommend.source)
}
// 点击到达视频页面
const goTovideo = (value) => {
    // todo:这儿有问题点击会再次加载

    router.replace("/home/video/")
}



</script>

<style lang="scss" scoped></style>