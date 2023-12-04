<template>
    <div class="comCard">
        <div class="cardBgc">
            <img :src="carddata.image" alt="">
        </div>
        <div class="cardText">
            <van-text-ellipsis rows="2" :content="text" />
        </div>
        <div class="cardMenoy">
            <span class="colMenoy">￥ {{ carddata.newprice }}</span><del>{{ carddata.oldproce }}</del>
        </div>
        <div class="cardBtn">
            <van-button type="danger">立即购买</van-button>
        </div>
        <div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, watchEffect } from "vue"
const props = defineProps(['carddata'])
const text = ref(props.carddata.text)
</script>

<style lang="scss" scoped>
.comCard {
    width: 150%;
    font-size: 60px;
    margin: 20px;
    float: left;

    .cardBgc {
        width: 100%;
        height: 500px;
        background-color: skyblue;

        img {
            width: 100%;
            height: 500px;
        }
    }

    .cardText {
        margin: 50px 20px;
    }

    .cardMenoy {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .colMenoy {
            color: red;
        }
    }

    .cardBtn {

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;

        .van-button {
            width: 90%;
            height: 90px;
            border-radius: 40px;
        }
    }


}
</style>