<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-29 14:27:45
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-01 19:21:18
-->
<template>
    <div class="homePage">
        <!-- 固定搜索框 -->
        <van-sticky>
            <searchVue />
        </van-sticky>

        <!-- 轮播图 -->
        <carouselVue :carousel="carousel" v-if="carousel" />
        <!-- 课程 -->
        <courseVue :sourceList="sourceList" />
        <div class="gap"></div>
        <NewAreaVue />
        <div class="gap"></div>
        <RecommendVue :recommendData="recommed" v-if="recommed" />
        <div class="gap"></div>
        <limitedTimeVue />
        <div class="gap"></div>
        <sourseLiveVue :sourceData="sourcelive" />
        <div class="gap"></div>
        <WonderfulCourseVue />
        <div class="gap"></div>
        <div class="gapbtn"></div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import carouselVue from "./ui/carousel.vue";
import courseVue from "./ui/course.vue";
import NewAreaVue from "./ui/newArea.vue";
import RecommendVue from "./ui/recommend.vue";
import searchVue from "./ui/search.vue";
import { useRecommedCourseApi, useCarouselApi, useSourceLiveApi, useSourceListpi } from '@/services/home.js'
import deepCopy from '@/tools/deepCopy.js'
import limitedTimeVue from "./ui/limitedTime.vue";
import sourseLiveVue from "./ui/courselive.vue";
import WonderfulCourseVue from "./ui/wonderfulCourse.vue";

// 获取推荐课程的数据
const recommed = ref()
// 获取轮播图的数据
const carousel = ref()
// 获取直播课程的数据
const sourcelive = ref()
// 获取课程列表的数据
const sourceList = ref()
onMounted(async () => {
    // 推荐课程
    let recommedRet = await useRecommedCourseApi()
    // 轮播图图片
    let carouselRet = await useCarouselApi()
    // 直播课程
    let liveRet = await useSourceLiveApi()
    // 课程列表
    let sourceRet = await useSourceListpi()
    recommed.value = deepCopy(recommedRet.data)
    carousel.value = deepCopy(carouselRet.data)
    sourcelive.value = deepCopy(liveRet.data)
    sourceList.value = deepCopy(sourceRet.data)
})

</script>

<style lang="scss" scoped>
.homePage {
    width: 100%;

    /* 隐藏滚动条的伪元素（适用于某些浏览器） */
    /* 这个样式可能不适用于所有浏览器 */
    ::-webkit-scrollbar {
        width: 0;
        /* 隐藏滚动条宽度 */
    }

    ::-webkit-scrollbar-thumb {
        background: transparent;
        /* 隐藏滚动条滑块 */
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        /* 隐藏滚动条轨道 */
    }

    /* 针对Firefox的伪元素样式 */
    /* 请注意，Firefox 可能需要单独的样式规则 */
    /* 这些样式可能不适用于所有Firefox版本 */
    /* 隐藏滚动条的伪元素 */
    scrollbar-width: none;

    /* 隐藏滚动条滑块和轨道的伪元素 */
    scrollbar-color: transparent transparent;
}

.gap {
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;

}

.gapbtn {
    height: 400px;
}
</style>