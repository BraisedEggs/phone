<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-30 15:42:19
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 08:59:42
-->
<template>
    <div class="shopCard">

        <div class="leftCard">
            <img :src="nowdata.shopimage" alt="">
        </div>
        <div class="rightCard">
            <div class="cardText">
                {{ nowdata.shpodescribe }}
            </div>
            <div class="cardPrice"><span>￥{{ nowdata.shopnewprice }}</span> <del>{{
                nowdata.shopoldprice
            }}</del></div>
            <div class="cardBuy"><span>限量{{ nowdata.shoplimit }}席</span>
                <van-button type="danger" size="small" :disabled="isdisabled">立即抢购</van-button>
            </div>
        </div>
    </div>

    <div class="gap"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const isdisabled = ref(false)
const props = defineProps(['nowdata'])


onMounted(() => {
    isdisabled.value = false
})
</script>

<style lang="scss" scoped>
.shopCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 30px auto;
    border: 1px solid #000;
    height: 500px;

    .leftCard {
        width: 40%;

        img {
            display: block;
            width: 100%;
            height: 500px;
        }
    }

    .rightCard {
        width: 55%;
        // background-color: blue;
        font-size: 60px;

        .cardText {
            font-size: 75px;
        }

        .cardPrice {
            margin-top: 60px;

            span {
                color: red;
            }

            del {
                color: #000;
            }

        }

        .cardBuy {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 70px;
            margin-top: 60px;

            .van-button {
                width: 50%;
            }
        }
    }

}

.gap {
    height: 50px;
}
</style>