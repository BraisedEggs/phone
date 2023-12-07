<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-05 11:53:20
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-07 08:31:52
-->
<template>
    <div>
        <van-nav-bar title="课程详情" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="myVideo">
            <Player :videoSrc="videoData.videoSrc" autoPlay />
        </div>
        <van-tabs v-model:active="activeName">
            <hr>
            <van-tab title="课程介绍" name="a">
                <CourseIntroduction :videoSource="videoSource" />
            </van-tab>
            <van-tab title="课程目录" name="b">
                <CourseCatalog :videoChapter="videoChapter" />
            </van-tab>
            <van-tab v-if="videoRemack" :title="'课程评价(' + videoRemack.length + ')'" name="c">
                <CourseEvaluation :videoRemack="videoRemack" />
            </van-tab>
        </van-tabs>
        <van-submit-bar button-text="马上学习" @submit="syudying" style="margin-bottom: 50px;">
            <div class="share">
                <van-icon name="chat" @click="setChatHandler">咨询</van-icon>
                <van-icon name="share" @click="showShare = true">分享</van-icon>
            </div>

        </van-submit-bar>
        <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </div>
</template>
  
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useVideoSourceApi, useVideoChapterApi, useVideoRemackApi } from "@/services/video.js"
import deepCopy from '@/tools/deepCopy.js'
import { showToast } from 'vant';
const router = useRouter();
// 定义视频
const videoData = reactive({
    // videoSrc: "https://cesium.com/public/SandcastleSampleData/big-buck-bunny_trailer.mp4",
    videoSrc: "./../../../public/love.mp4",
});
// 点击右边按钮需要回退
const onClickLeft = () => {
    // todo: 无法回退的问题
    router.back();
};
// 开局获取对应的课程信息
const videoSource = ref()
const videoChapter = ref()
const videoRemack = ref()
onMounted(async () => {
    // todo:这儿有问题需要传入当前的id才可以
    let sourceRet = await useVideoSourceApi()
    videoSource.value = deepCopy(sourceRet.data)
    let chapterRet = await useVideoChapterApi()
    videoChapter.value = deepCopy(chapterRet.data)
    let remackRet = await useVideoRemackApi()
    videoRemack.value = deepCopy(remackRet.data)
})


// 下面课程目录
const activeName = ref(0)

// 分享
const showShare = ref(false);
// todo:这儿的效果没有做
const options = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
];
// todo:聊天问题没有解决
const onSelect = (option) => {
    showToast(option.name);
    showShare.value = false;
};
// 聊天
const setChatHandler = () => {
    console.log(111)
    router.replace("/home/chat")
}

// 马上学习
// todo:马上学习
const syudying = () => {
    router.replace("/home/pay")
}
</script>
  
<style lang="scss" scoped>
video {
    width: 100%;
}

.van-submit-bar {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */





}

.share {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .van-icon {
        font-size: 80px;
        margin: 0 200px;
    }
}
</style>
  