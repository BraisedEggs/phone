<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-30 15:31:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-01 19:20:49
-->
<template>
    <div class="card">
        <div class="cardTop">
            课程直播
        </div>
        <van-divider />
        <div class="pic">
            <van-steps direction="vertical" :active="9">
                <template v-for="item, index in sourceData" :key="index">
                    <van-step>
                        <h3>{{ item.livesource }}</h3>
                        <p> {{ item.livetime.slice(0, 5) }}</p>
                        <div>
                            <div class="radioDiv">
                                <img :src="item.image" alt="">
                            </div>
                            <div>讲师 创海会牌讲师--{{ item.name }}</div>
                        </div>

                    </van-step>

                </template>

            </van-steps>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['sourceData'])
</script>


<style lang="scss" scoped>
.van-step {
    position: relative;
    margin-left: 250px;

    h3 {
        margin-bottom: 40px;
    }

    p {
        position: absolute;
        top: 50px;
        left: -300px;
    }

    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .radioDiv {
            width: 100px;
            height: 100px;
            border-radius: 100px;
            background-color: red;
            margin-right: 100px;
            overflow: hidden;
            img {
            width: 100px;
            height: 100px;

        }
        }

     



    }
}

.card {
    width: 100%;
    font-size: 100px;

    .cardTop {
        height: 200px;
        width: 100%;
        background-color: #fff;
        line-height: 200px;
        font-weight: 800;
        padding: 40px;
        padding-bottom: 0;
    }

    .pic {
        width: 100%;
        background-color: #fff;
    }

    .cardBot {
        margin-top: 30px;
        position: relative;


    }
}
</style>