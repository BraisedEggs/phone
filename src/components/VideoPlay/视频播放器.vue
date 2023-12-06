<template>
    <div class="video">
        <!-- video元素，通过ref属性引用为"videoPlayer"，
        后面的class不要瞎动-->
        <!-- 
        <video> 元素用于嵌入视频播放器。
        ref="videoPlayer" 将 video 元素引用为 "videoPlayer"，以便在 JavaScript 中访问。
        使用 class 属性动态绑定了一些样式类。
         -->
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered" controls>
            <source :src="videoSrc" />
        </video>
    </div>
</template>

<script setup>
// 导入配置
/* 
video.js
中文化
样式
*/
import videojs from 'video.js';
import lang_zhcn from "video.js/dist/lang/zh-CN.json"
import 'video.js/dist/video-js.min.css'
import { onBeforeUnmount, ref, watch, nextTick, onMounted } from 'vue';

/* 
使用 defineProps 获取从父组件传递过来的参数，这里获取了一个名为 videoSrc 的参数，用于指定视频的来源。
*/
const props = defineProps(['videoSrc'])

/* 
使用 ref 创建了一个响应式引用 videoPlayer，用于引用 <video> 元素，以便后续在代码中对其进行操作。
*/


const videoPlayer = ref()


/* 
使用 onMounted 钩子，该钩子在组件挂载后执行，用于调用 initPlay 函数，即在组件加载完成后初始化视频播放器。
*/
onMounted(() => {
    initPlay();
});


// todo:现在这步我也不知道要干嘛
let player;

// 初始化
const initPlay = async () => {
    // 添加中文语言包
    videojs.addLanguage("zh-CN", lang_zhcn);
    // 然后通过 nextTick 等待下一次 DOM 更新，确保能够正确获取到 videoPlayer 的引用。
    await nextTick();
    /* 
    这是一个用于配置视频播放器行为的 JavaScript 对象，具体的配置项含义如下：

muted：

类型：Boolean
默认值：true
含义：指定视频是否静音。如果设置为 true，则视频将默认为静音状态。
controls：

类型：Boolean
默认值：true
含义：指定是否显示视频播放器的控制条。如果设置为 true，则显示控制条，允许用户控制播放、暂停等操作。
autoplay：

类型：Boolean
默认值：true
含义：指定视频是否自动播放。如果设置为 true，则在加载完毕后自动开始播放。
loop：

类型：Boolean
默认值：true
含义：指定视频是否循环播放。如果设置为 true，则在播放结束时重新开始播放。
language：

类型：String
默认值："zh-CN"
含义：指定视频播放器的语言。在这个例子中，语言被设置为中文（"zh-CN"）。
techOrder：

类型：Array
默认值：["html5"]
含义：指定视频播放器使用的技术顺序。在这里，设置为 ["html5"] 表示优先使用 HTML5 技术进行视频播放。
    */
    const options = {
        muted: true,
        controls: true,
        autoplay: true,
        loop: true,
        language: "zh-CN",
        techOrder: ["html5"],
    };

    /* 
  videoPlayer.value：

videoPlayer 是通过 ref 创建的响应式引用，它引用了 <video> 元素。videoPlayer.value 用于获取真实的 DOM 元素，以便将其传递给 videojs 函数，作为初始化视频播放器的目标元素。
options：

options 是一个包含各种配置选项的对象，用于定制视频播放器的行为，如前面所解释的。这个对象在初始化视频播放器时被传递给 videojs 函数。
回调函数：

这是在播放器初始化完成后执行的回调函数。在这个函数中，首先通过 videojs.log 输出一条日志，表示播放器已经准备好了。
自动播放检查：

javascript
Copy code
if (props.autoPlay && props.videoSrc) {
    player.play();
}
这段代码检查 props.autoPlay 和 props.videoSrc 的值。如果 autoPlay 为 true 且 videoSrc 不为空，则调用 player.play() 方法，开始播放视频。这是一个条件性的自动播放逻辑。
事件监听：

javascript
Copy code
player.on("ended", () => {
    videojs.log("播放结束了!");
});

player.on("error", () => {
    videojs.log("播放器解析出错!");
});
这里使用 player.on 方法监听了两个事件：
当视频播放结束时（"ended" 事件），输出一条日志表示播放结束。
当播放器解析视频出错时（"error" 事件），输出一条日志表示解析出错。
整体来说，这段代码的目的是在视频播放器初始化完成后，根据配置和属性进行一些操作，包括可能的自动播放、事件监听等。这样可以确保在播放器准备好后，根据需求执行一些定制的逻辑。
    */
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

// 侦听变化
/* 
watch 函数：

watch 函数用于监视数据的变化，当被监视的数据发生变化时，执行相应的回调函数。
{ videoSrc: (newValue) => { ... } }：

在这里，我们使用对象方式传递了一个包含监视属性和回调函数的对象。属性 videoSrc 是要监视的数据，而箭头函数 (newValue) => { ... } 是在数据变化时执行的回调函数。
newValue 参数：

newValue 是回调函数的参数，表示被监视属性的新值。在这个例子中，newValue 表示 videoSrc 属性的新值。
回调函数内部逻辑：

在回调函数内部，首先调用 player.pause() 暂停当前播放，然后通过 player.src(props.videoSrc) 更新视频源，接着调用 player.load() 重新加载视频，最后通过条件判断 if (props.videoSrc) 来确保 props.videoSrc 不为空，如果不为空则调用 player.play() 播放视频。
这段代码的作用是监听 videoSrc 属性的变化，并在变化时执行相应的逻辑，确保视频播放器根据新的 videoSrc 进行相应的操作，包括暂停、更新源、加载和播放等。这样能够保证在 videoSrc 变化时，播放器状态得到正确的处理。

*/
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

//在组件即将被销毁时清理和释放视频播放器实例，以防止潜在的内存泄漏。
/* 
onBeforeUnmount 钩子：

onBeforeUnmount 是 Vue 3 提供的一个生命周期钩子函数，在组件即将被销毁之前执行。这时是执行一些清理工作的好时机。
回调函数：

() => { player?.dispose(); } 是 onBeforeUnmount 钩子的回调函数。这个函数的目的是释放视频播放器实例。使用可选链操作符 ?. 来确保在 player 存在的情况下才调用 dispose 方法。
player?.dispose();：

这行代码调用了 dispose 方法，用于释放视频播放器实例。dispose 方法是 video.js 提供的，用于清理播放器实例占用的资源，包括事件监听器、内存等。通过 player?.dispose() 使用可选链操作符，确保在 player 存在的情况下才执行 dispose 方法。
总体来说，这段代码的作用是在组件即将被销毁时，通过 onBeforeUnmount 钩子释放视频播放器实例，以确保在组件销毁时进行必要的清理，避免潜在的问题。

*/
onBeforeUnmount(() => {
    player?.dispose();
});
</script>

<style lang="scss" scoped>
.video {
    width: 100%;
    height: 1000px;
    background-color: red;

    .video-js {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }
}

:deep(.vjs-tech) {
    object-fit: fill;
}
</style>