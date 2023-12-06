<template>
    <div>
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" class="top">
            <template #title>
                <div>木子教育</div>
                <div>客服会话</div>
            </template>
        </van-nav-bar>
        <div class="gap"></div>
        <div class="chatpage" ref="contentRef">
            <chatPageVue :sendData="sendData" :randomMessage="randomMessage" />
        </div>
        <van-tabbar style="z-index:9999">
            <van-cell-group inset>
                <van-field v-model="sendtextvalue" rows="1" autosize type="textarea" placeholder=""
                    @keyup.enter="onEnter" />
                <div class="operateMethod">
                    <van-icon name="smile" size="30" @click="selectEmoticon" />
                    <van-button size="small" type="primary" @click="sendMessage">发送</van-button>
                </div>
            </van-cell-group>
        </van-tabbar>
        <van-action-sheet v-model:show="isEmoticon" title="表情管理">
            <van-grid :column-num="8">
                <van-grid-item v-for="value in 64
                " :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </van-action-sheet>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import chatPageVue from "./ui/chatPage.vue"

// 输入发送文本
const sendtextvalue = ref()
// 返回上一页
// todo: 这儿不会写
const onClickLeft = () => {

}
// 按下enter
const onEnter = () => {
    sendMessage()
}
// 点击发送
const sendData = ref()
const sendMessage = () => {
    sendData.value = ""
    sendData.value = sendtextvalue.value
    console.log(sendData.value)
    sendtextvalue.value = ""
    scrollToBottom();
    setTimeout(() => {
        sendFixedData()
    }, 1000);
}
// 选择表情
const isEmoticon = ref(false)
const selectEmoticon = () => {
    isEmoticon.value = true
}
// 滚动条数据
const contentRef = ref(null);
const scrollToBottom = () => {
    console.log(contentRef.value.scrollHeight, contentRef.value.scrollTop)
    contentRef.value.scrollTop = contentRef.value.scrollHeight;
}
// 开局显示最新数据
onMounted(() => {
    scrollToBottom();
})

// 制作假数据
let say = [
    "放部百七建酸到带而例机点。",
    "本往很中争什接作区在名达这在没。",
    "种共于音少思名条风周全式少公众。",
    "京最国需能军列治列具料般须难周。",
    "号解京总际分山响决去大料府片。",
    "算各通文眼细型习段周标因。",
    "各文我之定合省金月常接取问大制。"
]
const randomMessage = ref()
const sendFixedData = () => {
    randomMessage.value = say[Math.floor(Math.random() * say.length)];
}
</script>


<style lang="scss" scoped>
.top {
    position: fixed;
    width: 100%;
    z-index: 100;
}

.gap {
    height: 240px;
}

.van-cell-group {
    display: flex;

    align-items: center;
    width: 100%;
    height: 200px;

    .van-field {
        display: flex;
        align-items: center;
        width: 70%;
        border: 1px solid #ccc;
        height: 180px;
        line-height: 1;
    }

    .operateMethod {
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .van-button {
            width: 300px;
            font-size: 70px;
            line-height: 1;
        }
    }
}

.chatpage {
    height: 100%;
    background-color: red;
}
</style>