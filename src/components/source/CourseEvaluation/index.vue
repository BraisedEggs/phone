<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-05 16:04:10
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-06 10:13:40
-->
<template>
    <div class="evaluation">
        <div class="top">
            <div>
                <span>综合评分：</span><span><van-rate v-model="evaluationvalue" readonly /></span>
            </div>
            <div>
                <span>好评率：</span><span>{{ remacknumber }}%</span>
            </div>
        </div>
        <div class="gap"></div>
        <div v-for="item, index in videoRemack" :key="index">
            <div class="bottom">
                <div class="left">
                    <img :src="item.image" alt="">
                </div>
                <div class="right">
                    <div><span>{{ item.name }}</span><van-rate v-model="item.remarknumber" readonly></van-rate></div>
                    <div class="remark">{{ item.remackcontext }}</div>
                    <div class="datetime">{{ dealtime(item.remacktime) }}</div>
                </div>

            </div>
            <hr>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";
// 总评分
// const evaluationvalue = ref(1)
// const remacknumber = ref(0)

const props = defineProps(['videoRemack'])
// 处理时间
const dealtime = (value) => {
    return value.split(" ")[0];
}
// 遍历每一项计算总评价
const evaluationvalue = computed(() => {
    const sum = props.videoRemack.reduce((acc, item) => acc + item.remarknumber, 0);
    return Math.floor((sum / props.videoRemack.length) * 5);
});

const remacknumber = computed(() => evaluationvalue.value * .2);
// watchEffect(() => {
//     evaluationvalue.value = props.videoRemack.reduce((acc, item, index, arr) => {
//         evaluationvalue.value = ((acc + item.remarknumber) / arr.length).toString().split(".")[0]
//         switch (evaluationvalue.value) {
//             case 1:
//                 return remacknumber.value = 20

//             case 2:
//                 return remacknumber.value = 40

//             case 3:
//                 return remacknumber.value = 60

//             case 4:
//                 return remacknumber.value = 80

//             case 5:
//                 return remacknumber.value = 100

//         }
//         return evaluationvalue.value
//     }, 0);
// })

</script>

<style lang="scss" scoped>
.evaluation {
    padding: 80px;
    margin-top: 30px;

    .top {

        padding: 30px;

        div {

            margin: 30px;
        }
    }

    .gap {
        width: 100%;
        height: 30px;
        background-color: #ccc;
    }

    .bottom {
        display: flex;
        float: left;
        justify-content: space-between;
        margin: 40px;

        .left {
            /* width: 1000px;
            height: 300px; */
            width: 300px;
            height: 300px;
            background-color: red;
            border-radius: 300px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;

            }
        }

        .right {
            width: calc(100% - 300px);

            div {
                margin: 30px;

                &:nth-child(1) {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                &:nth-child(3) {
                    font-size: 60px;
                    color: #ccc;
                }
            }
        }
    }
}
</style>