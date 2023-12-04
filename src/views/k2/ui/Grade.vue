<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-12-04 14:45:09
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-04 15:37:57
-->
<template>
    <div class="grade">
        <h1>设置年级</h1>
        <hr>
        <div>
            <van-nav-bar left-text="幼儿园" @click-left="handleNavBarClick('幼儿园')" />
            <van-grid :column-num="3" :gutter="20">
                <van-grid-item v-for="value in ['大班', '中班']" :key="value" @click="searchgrade(value)">
                    {{ value }}
                </van-grid-item>
            </van-grid>

            <van-nav-bar left-text="小学" @click-left="handleNavBarClick('小学')" />
            <van-grid :column-num="3" :gutter="20">
                <van-grid-item v-for="value in ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']" :key="value"
                    @click="searchgrade(value)">
                    {{ value }}
                </van-grid-item>
            </van-grid>

            <van-nav-bar left-text="初中" @click-left="handleNavBarClick('初中')" />
            <van-grid :column-num="3" :gutter="20">
                <van-grid-item v-for="value in ['初一', '初二', '初三']" :key="value" @click="searchgrade(value)">
                    {{ value }}
                </van-grid-item>
            </van-grid>

            <van-nav-bar left-text="高中" @click-left="handleNavBarClick('高中')" />
            <van-grid :column-num="3" :gutter="20">
                <van-grid-item v-for="value in ['高一', '高二', '高三']" :key="value" @click="searchgrade(value)">
                    {{ value }}
                </van-grid-item>
            </van-grid>
        </div>

        <hr>
        <van-button type="danger" @click="savegrade">保存</van-button>
    </div>
</template>

<script setup>
import { ref } from "vue"

const grade = ref()
const emit = defineEmits("sendgrade")
const savegrade = () => {
    emit('savegrade', grade.value)
}
const searchgrade = (value) => {
    grade.value = ""
    grade.value = value
}
</script>

<style lang="scss" scoped>
.grade {


    h1 {
        width: 400px;
        font-family: 'ZCOOL KuaiLe', cursive;
        font-size: 100px;
        line-height: 2;
        margin: auto;
    }

    border: 1px solid #000 h1 {
        width: 400px;
        margin: auto;
        line-height: 200px;
    }



    .van-grid-item {
        width: 400px;
        height: 200px;

        :hover {
            cursor: pointer;
            background-color: skyblue;
        }
    }

    .van-button {
        display: flex;
        justify-content: center;
        width: 400px;
        font-size: 100px;
        margin: 50px auto;
    }
}
</style>