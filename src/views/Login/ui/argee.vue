<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-28 16:16:37
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 11:25:41
-->
<template>
    <div class="option">
        <div id="change">
            <div @click="optionargee" id="changeinter">

            </div>
        </div>
        <div>
            已阅读并同意
            <span>
                《用户服务协议》
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const optionRadio = ref(false)
const emit = defineEmits(['sendSelected'])
const optionargee = () => {
    const changeColor = document.getElementById('changeinter')
    optionRadio.value = !optionRadio.value
    optionRadio.value ? changeColor.style.backgroundColor = 'red' : changeColor.style.backgroundColor = "#FFF"
    // 发送选中的值到登录页面
    emit('sendSelected', optionRadio.value)

}
</script>

<style lang="scss" scoped>
.option {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    #change {

        width: 100px;
        height: 100px;
        border: 1px solid #000;
        border-radius: 100%;
        margin-right: 50px;

        div {
            width: 60px;
            height: 60px;
            margin: 15px;
            border: 1px solid #000;
            border-radius: 100%;
        }

    }

    span {
        color: skyblue;
    }
}
</style>