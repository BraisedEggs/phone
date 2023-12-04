<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-30 15:31:06
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 14:26:52
-->
<template>
    <div class="card">
        <div class="cardTop">
            现实秒杀
        </div>
        <div class="pic">
            <van-tabs v-model:active="active">
                <van-tab v-for="value, key in  limitdData.value " :key="value">

                    <template #title style="width:200px">
                        <div class="vertical-title">
                            <div>{{ value.describe }}</div>
                            <div>{{ convertToTimeFormat(value.time) }}</div>

                        </div>
                    </template>
                    <van-divider />
                    <template v-for="item, index in  value.shopdata " :key="index">
                        <leftCard :nowdata="item" />
                    </template>

                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import { useLimiteTimeApi } from "@/services/home.js";
import { formatCurrentTime, convertToTimeFormat } from "@/tools/NowDate";

const describe = ref("");
const active = ref(0);
const limitdData = reactive({});
const nowdata = formatCurrentTime();

onMounted(async () => {
    let limiteRet = await useLimiteTimeApi(active.value);
    limitdData.value = limiteRet.data.limitedtime;
    limitdData.value.map(item => {
        const timdata = convertToTimeFormat(item.time)
        if (timdata == nowdata) {
            describe.value = "抢购中"
        } else {
            describe.value = "即将抢购"
        }
    })
});


</script>


<style lang="scss" scoped>
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
    }

    .pic {
        width: 100%;
        background-color: #fff;

        .van-tabs {
            width: 100%;

            div {
                width: 100%;

                .van-tab--line {

                    width: 500px;

                }
            }

        }
    }

    .cardBot {
        margin-top: 30px;
        position: relative;


    }
}

.vertical-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 60px 0;

    div {
        margin: 20px 0;
    }
}

.gap {
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;

}
</style>