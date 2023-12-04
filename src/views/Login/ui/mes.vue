<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-28 16:47:15
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 13:24:41
-->
<template>
    <div class="meslogin">
        <van-form @submit="onSubmit">
            <van-field v-model="loginData.username" name="用户名" label="用户名" placeholder="用户名" @click="showKeyboard"
                @touchstart.stop="show = true" :rules="[{ required: true, message: '请认真填用户名' }]" />
            <van-number-keyboard v-model="loginData.username" :show="show" :maxlength="18" @blur="show = false" />
            <van-field v-model="loginData.password" type="password" name="密码" label="密码" placeholder="密码"
                autocomplete="current-password" :rules="[{ required: true, message: '请认真填写密码' }]" />
            <div style="margin:50px 16px 0; ">
                <van-button round block native-type="submit" type="success">提交</van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useLoginStore } from '@/stores/mes.js'
import { showDialog, showLoadingToast } from 'vant';
import { useRouter } from "vue-router";
// 接收参数
const props = defineProps(['sendOption']);
// 定义变量
const router = useRouter()
const show = ref(false);
const username = ref("段娜")
const password = ref("")
const loginData = reactive({
    username: username.value,
    password: password.value
})

// 获取pinia中的数据
const pasStore = useLoginStore()
// 登录
const onSubmit = async () => {
    if (props.sendOption) {
        let loginCode = await pasStore.USEPPASSWORDCTION(loginData)
        if (loginCode === 200) {
            router.replace('/front')
        } else {
            showLoadingToast({
                message: '网络出现异常',
                forbidClick: true,
                loadingType: 'spinner',
            });
        }
    }
    else {
        showDialog({
            message: '请认真查看同意书',
        }).then(() => {

        });
    }

}
// 出现键盘
const showKeyboard = () => {
    show.value = true
}

</script>

<style lang="scss" scoped>
.meslogin {
    margin-top: 200px;
}
</style>