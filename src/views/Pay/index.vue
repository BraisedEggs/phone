<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-07 08:30:39
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-07 09:18:22
-->
<template>
    <div style="width:100%">
        <van-nav-bar title="待支付订单" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="buyItem">
            <div style="padding: 10px; 0">购买专栏</div>
            <div class="Goods">
                <div class="leftimage"><img src="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" alt=""></div>
                <div class="source">
                    <div>
                        课程名称
                    </div>
                    <div>
                        <span>课程简介</span><span>￥100</span>
                    </div>
                    <div>
                        <span>
                            已更新3期
                        </span>
                        <span>
                            x14
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="gap" style="height: 20px;  border-top: 1px solid #f2f2f2;;margin-top:60px;backgroundColor:#f2f2f2;">
        </div>
        <div class="total">
            <span>合计：</span><span>￥100</span>
        </div>
        <div class="hint">
            提示：你将购买的是虚拟视频内容服务，购买后不支持退订、转让、退换
        </div>
        <van-button @click="goBuy">去支付</van-button>

    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const onClickLeft = () => history.back();
const router = useRouter()
const goBuy = () => {
    router.replace("/home/paysuccess")
}
</script>

<style lang="scss" scoped>
.buyItem {
    width: 100%;
    height: 600px;
    padding: 90px;
    box-sizing: border-box;

    border-top: 1px solid #f2f2f2;

    .Goods {
        display: flex;
        height: 600px;


        .source {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-content: space-between;

            div {
                display: flex;
                justify-content: space-between;
                align-content: space-between;
            }
        }

        .leftimage {
            width: 40%;
            height: 600px;

            img {
                width: 100%;
                height: 600px;
            }

        }
    }



}

.total {
    border-top: 1px solid #f2f2f2;
    padding: 70px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
}

.hint {
    padding: 60px 20px;
    color: #ccc;
    font-size: 80px;
}

.van-button {
    width: 80%;
    height: 200px;
    border-radius: 50px;
    margin: 0 auto;
    background-color: red;
    display: flex;
    color: #fff;
    justify-content: center;
}
</style>