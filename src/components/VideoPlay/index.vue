<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-05 14:12:41
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-05 21:46:51
-->
<template>
    <div class="videoplayer">
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered" controls>
            <source :src="videoSrc" />
        </video>
        <!-- 弹幕 -->
        <div class="position">
            <van-barrage v-model="list">
                <div class="video" style="width: 100%;"></div>
            </van-barrage>

        </div>
        <van-cell-group inset>
            <van-field v-model="textvalue" placeholder="请输入您的评价" @keydown.enter="handleEnter" />
        </van-cell-group>
    </div>
</template>

<script setup>
import videojs from 'video.js';
import lang_zhcn from "video.js/dist/lang/zh-CN.json"
import 'video.js/dist/video-js.min.css'
import { onBeforeUnmount, ref, watch, nextTick, onMounted } from 'vue';

const props = defineProps(['videoSrc'])

const videoPlayer = ref()

onMounted(() => {
    initPlay();
});

let player;

// 初始化
const initPlay = async () => {
    videojs.addLanguage("zh-CN", lang_zhcn);
    await nextTick();
    const options = {
        muted: true,
        controls: true,
        autoplay: true,
        loop: true,
        language: "zh-CN",
        techOrder: ["html5"],
    };
    player = videojs(videoPlayer.value, options, () => {
        videojs.log("播放器已经准备好了!");
        if (props.autoPlay && props.videoSrc) {
            player.play();
        }
        player.on("ended", () => {
            videojs.log("播放结束了!");
        });
        player.on("error", () => {
            videojs.log("播放器解析出错!");
        });
    });
};

watch({
    videoSrc: (newValue) => {
        player.pause();
        player.src(props.videoSrc);
        player.load();
        if (props.videoSrc) {
            player.play();
        }
    }
});

onBeforeUnmount(() => {
    player?.dispose();
});

// 弹幕操作
const defaultList = [
    { id: 100, text: '轻量' },
    { id: 101, text: '可定制的' },
    { id: 102, text: '移动端' },
    { id: 103, text: 'Vue' },
    { id: 104, text: '组件库' },
    { id: 105, text: 'VantUI' },
    { id: 106, text: '666' },
];

const list = ref([...defaultList]);
// 点击输入弹幕
const textvalue = ref()
const handleEnter = () => {
    if (textvalue.value.trim() !== '') {
        list.value.push({
            id: Date.now(),
            text: textvalue.value,
        });
        textvalue.value = '';
    }
}


</script>

<style lang="scss" scoped>
.videoplayer {
    width: 100%;
    height: 1000px;
    position: relative;
    margin-bottom: 200px;

    .video-js {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }
}

:deep(.vjs-tech) {
    object-fit: fill;
}

.position {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .9;
    top: 0;
    left: 0;

    .van-barrage {
        width: 100%;
        height: 100%;
    }

}
</style>