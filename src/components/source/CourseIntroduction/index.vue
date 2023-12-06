<template>
    <div v-if="videoSource" class="informationsource">
        <div class="text">
            <div class="top">
                <div class="name">
                    课程名称
                </div>
                <div class="price">
                    <span>￥{{ dealNum(videoSource.coursenewprice) }}</span>
                    <del>{{ dealNum(videoSource.courseoldprice) }}</del>
                    <span>已有{{ dealNumber(videoSource.coursenumber) }}人参加</span>
                </div>
            </div>
            <hr>
            <div class="bottom">

                开课时间： <span>{{ dealtime(videoSource.coursestartingtime) }}</span>
                -
                <span> {{ dealtime(videoSource.courseendtime) }}</span>
            </div>
        </div>
        <div class="gap"></div>
        <div class="pic">
            <div class="picdesc">
                {{ videoSource.coursetext }}
                —— {{ videoSource.coursetitle }}
            </div>
            <div class="image" v-for="item, index in videoSource.courseimage" :key="index">
                <img :src="item.image" :alt="item.value">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps(['videoSource'])
// 处理数字函数
const dealNum = (value) => {
    return Number(String(value).slice(0, 5)).toFixed(2)
}
// 真值缩小
const dealNumber = (value) => {
    let dealData = ["", "0+", "00+", "000+", "万+", "0万+", "00万+", "000万+", "亿+", "0亿+", "00亿+", "000亿+", "万亿+", "十万亿+", "百万亿+", "千万亿+", "万万亿+"]
    const numberData = String(value)[0] + dealData[String(value).length - 1]
    return numberData
}
// 处理时间
const dealtime = (value) => {
    return value.split(" ")[0];
}
</script>

<style lang="scss" scoped>
.informationsource {
    font-family: 'ZCOOL KuaiLe', cursive;

    .text {
        padding: 50px;

        .top {
            >div {
                margin: 80px;
            }

            .price {
                display: flex;
                justify-content: space-between;
                align-self: center;

                del {
                    color: #ccc;
                }


                span {
                    &:nth-child(1) {
                        font-size: 90px;
                        color: red;
                    }

                    &:nth-child(3) {
                        font-size: 60px;
                        color: #ccc;
                    }
                }

            }
        }

        .bottom {
            text-align: center;
            line-height: 200px;
        }
    }

    .gap {
        width: 100%;
        height: 50px;
        background-color: #ccc;
    }

    .pic {
        padding: 150px;

        .picdesc {
            margin-bottom: 100px;
        }

        .image {
            width: 100%;


            img {
                display: block;
                width: 80%;
                height: 900px;
                margin: 100px auto;

            }

        }
    }
}
</style>