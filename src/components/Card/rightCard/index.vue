<template>
    <div class="rightCard">
        <div class="logo">
            <span class="logoLeft">
                <div class="pic">
                    <img :src="recommedData.cmplogo" alt="">
                </div>
                <div class="">{{ recommedData.cmpname }}</div>
            </span>
            <span class="logforce" @click="attentionHandler(recommedData.cmpid)">
                {{ attentionData }}
            </span>
        </div>
        <div class="context">
            <div class="con">
                <div class="texttop">
                    {{ recommedData.cmpquest }}
                </div>
                <div class="textbottom">
                    {{ recommedData.cmpansk }}
                </div>
            </div>
            <div class="conpic">
                <img :src="recommedData.cmpimg" alt="">
            </div>
        </div>
    
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps(['recommedData'])

// 推荐变成已关注
const attentionData = ref("+未关注")
const attentionHandler = (value) => {
    // todo: 这儿需要传值给另一个页面
    console.log(value)
    attentionData.value = "已关注"
}
</script>

<style lang="scss" scoped>
.rightCard {
    background-color: #fff;
    border: 1px solid #ccc;

    hr {
        width: 70%;
    }


    .font-stylus {
        font-family: 'ZCOOL KuaiLe', cursive;
    }

    .flex-container {
        display: flex;
        justify-content: space-between;
        align-self: center;
    }

    .wh {
        width: 150px;
        height: 150px;
    }

    .logo {
        @extend .flex-container;
        height: 150px;
        margin-top: 100px;
        margin-bottom: 100px;

        .logoLeft {
            @extend .flex-container;



            .pic {
                overflow: hidden;
                @extend .wh;
                overflow: hidden;
                border-radius: 150px;
                background-color: skyblue;

                img {
                    @extend .wh;
                }
            }

            div {
                margin-left: 100px;
                line-height: 150px
            }
        }

        .logforce {
            margin-right: 100px;
            line-height: 150px
        }

    }

    .context {
        @extend .flex-container;
        @extend .font-stylus;

        .con {
            width: 40%;
            margin-left: 100px;

            .texttop {
                color: #000;
                font-size: 80px;
            }

            .textbottom {
                margin-top: 50px;
                color: #ccc;
                font-size: 60px;
            }
        }

        .conpic {
            width: 25%;
            height: 400px;
            margin-right: 100px;
            margin-bottom: 40px;

            img {
                width: 100%;
                height: 400px;
            }
        }
    }
}
</style>
