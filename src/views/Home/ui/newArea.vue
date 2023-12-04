<template>
    <div class="card">
        <div class="cardTop">
            新人专区
        </div>
        <div class="pic">
            <img src="../../../../public/u603.png" alt="">
            <div class="more">查看更多 》》</div>
            <div class="newPeople">新人大礼包
                <br>课程免费送
            </div>
            <div class="everyday">每天都有不 <br> 一样的精彩</div>
        </div>
        <div class="cardBot">
            <img src="../../../../public/u510.png" alt="">
            <van-grid :border="false" :column-num="5" class="botBox">
                <van-grid-item @click="enterCourse">
                    <van-image src="../../../../public//k12.png" />
                    <span>英语</span>
                </van-grid-item>
                <van-grid-item @click="enterCourse">
                    <van-image src="../../../../public//k12.png" />
                    <span>英语</span>
                </van-grid-item>
                <van-grid-item @click="enterCourse">
                    <van-image src="../../../../public//k12.png" />
                    <span>英语</span>
                </van-grid-item>
                <van-grid-item @click="enterCourse">
                    <van-image src="../../../../public//k12.png" />
                    <span>英语</span>
                </van-grid-item>
                <van-grid-item @click="enterCourse">
                    <van-image src="../../../../public//k12.png" />
                    <span>英语</span>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
// todo:这儿需要增加页面
const enterCourse = () => {
    console.log("----")
}
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    font-size: 100px;

    .cardTop {
        height: 200px;
        width: 100%;
        background-color: skyblue;
        line-height: 200px;
        font-weight: 800;
    }

    .pic {
        position: relative;
        font-size: 60px;

        img {
            width: 100%;
        }

        .more {
            width: 500px;
            position: absolute;
            top: 10%;
            left: 75%;
        }

        .newPeople {
            width: 500px;
            position: absolute;
            top: 50%;
            left: 10%;
        }

        .everyday {
            width: 500px;
            position: absolute;
            top: 50%;
            left: 58%;
        }
    }

    .cardBot {
        margin-top: 30px;
        position: relative;

        img {
            width: 100%;
        }

        .botBox {
            width: 70%;
            position: absolute;
            top: 40%;
            left: 16%;

            .van-grid-item {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-size: 70px;

                span {
                    margin-top: 60px;
                }
            }

        }
    }


}
</style>