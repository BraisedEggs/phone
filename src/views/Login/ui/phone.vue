<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-28 16:47:15
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-29 15:24:45
-->
<template>
	<div class="codelogin">
		<van-form @submit="onSubmit">
			<van-field v-model="phoneData.userphone" name="userphone" label="手机号" placeholder="请填写手机号码"
				:rules="[{ required: true, message: '请认真填写手机号码', validator: validatorPhone }]" />
			<div class="codeNumber">
				<van-field v-model="phoneData.phonecode" type="text" name="code" label="验证码" placeholder='请输入验证码'
					:rules="[{ required: true, message: '请认真填写验证码' }]" />
				<van-button plain type="primary" @click="sendCode">发送验证码</van-button>
			</div>

			<div style="margin:50px 16px 0; ">
				<van-button round block type="success" native-type="submit">提交</van-button>
			</div>
		</van-form>

	</div>
</template>

<script setup>
// 导入验证码
import { verificationCode } from '@/tools/VerificationCode.js'
import { ref } from 'vue'
import { showDialog, showLoadingToast } from 'vant';
import { useLoginPhoneStore } from "@/stores/phone.js"
import { useRouter } from 'vue-router';
// 接收参数
const props = defineProps(['sendOption']);
// 设置变量
const router = useRouter()
const userphone = ref('13647501396')
const phonecode = ref()
const phoneData = ref({
	userphone: userphone.value,
	phonecode: phonecode.value
})
const phoneStore = useLoginPhoneStore()
// 点击发送验证码
const code = ref()
const sendCode = () => {
	if (props.sendOption) {
		// 判断电话
		// const code = validatorPhone()
		if (regcode) {
			// 获取验证码
			const generatedCode = verificationCode()
			code.value = generatedCode
			alert(generatedCode)
		}
	}
	else {
		showDialog({
			message: '请认真查看同意书',
		}).then(() => {

		});
	}


}
// 电话验证
const regcode = ref()
const validatorPhone = () => {
	const reg = /^1[1,3]\d{9}$/
	const phonecode = phoneData.value.userphone
	if (!reg.test(phonecode)) {
		showDialog({
			message: '请认真填写手机号码',
		}).then(() => {
			regcode.value = 0
		});

	}

}
// 登录验证
const onSubmit = async () => {
	if (phoneData.value.phonecode === code.value) {
		let phoneCode = await phoneStore.USEPPHONEACTION(phoneData)
		if (phoneCode === 200) {
			router.replace('/front')
		}
		else {
			showLoadingToast({
				message: '网络出现异常',
				forbidClick: true,
				loadingType: 'spinner',
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.codelogin {
	margin-top: 200px;
}

.codeNumber {
	display: flex;

	.van-field {
		width: 60%;
	}

	.van-button {
		height: 200px;
	}

}
</style>