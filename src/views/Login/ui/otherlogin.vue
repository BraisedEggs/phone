<template>
    <div class="other">
        <div @click="wechat">
            <img src="../../../../public/weChat.png" alt="">
            <span>微信登录</span>
        </div>
        <div @click="txqq">
            <img src="../../../../public/QQ.png" alt="">
            <span>qq登录</span>
        </div>
        <div @click="weibo">
            <img src="../../../../public/Weibo.png" alt="">
            <span>微博登录</span>
        </div>

    </div>
</template>

<script setup>
import { showDialog } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()
const wechat = async () => {
    // showDialog({
    //     message: '功能再开发中',
    // }).then(() => {

    // });
    const weChatOAuthURL = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=UrlEncode（URL)&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
    window.location.href = weChatOAuthURL;

}
const txqq = async () => {
    showDialog({
        message: '功能再开发中',
    }).then(() => {

    });
}
const weibo = async () => {
    showDialog({
        message: '功能再开发中',
    }).then(() => {

    });
}
</script>

<style lang="scss" scoped>
.other {
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        img {
            width: 200px;
            height: 200px;
            margin: 20px 0 50px;
        }
    }
}
</style>