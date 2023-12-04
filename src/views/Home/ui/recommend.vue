<template>
    <div class="card">
        <div class="cardTop">
            课程推荐
        </div>
        <div class="pic">
            <img src="../../../../public/u466.png" alt="">
        </div>
        <div class="gap"></div>
        <div class="cardBot">
            <TopCard :carddata="dataAi" @click="opensource" />
            <TopCard :carddata="dataJapanese" @click="opensource" />
            <TopCard :carddata="dataAi" @click="opensource" />
            <TopCard :carddata="dataJapanese" @click="opensource" />
            <TopCard :carddata="dataAi" @click="opensource" />
            <TopCard :carddata="dataJapanese" @click="opensource" />
            <TopCard :carddata="dataAi" @click="opensource" />
            <TopCard :carddata="dataJapanese" @click="opensource" />
            <TopCard :carddata="dataAi" @click="opensource" />
            <TopCard :carddata="dataJapanese" @click="opensource" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from "vue"
import deepCopy from "@/tools/deepCopy";

const props = defineProps(['recommendData'])
// 获取每次的数据传给公用组件
const dataAi = ref()
const dataJapanese = ref()
watchEffect((recommendData) => {
    dataAi.value = deepCopy(props.recommendData.AI)
    dataJapanese.value = deepCopy(props.recommendData.Japanese)

})
// todo:这儿需要增加页面
const opensource = () => {
    console.log('dakai')
}






const enterCourse = () => {
    console.log("----")
}

</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    font-size: 100px;

    .gap {
        width: 100%;
        height: 30px;
        background-color: #f2f2f2;

    }

    .cardTop {
        height: 200px;
        width: 100%;
        background-color: #fff;
        line-height: 200px;
        font-weight: 800;
        padding-left: 100px;
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
        width: 100%;
        margin-top: 30px;
        position: relative;
        overflow-x: auto;
        white-space: nowrap;
        display: flex;

        div {
            cursor: pointer;
        }
    }


}
</style>