<template>
	<div>
		<p class="error">{{ error }}</p>
		<!--错误信息-->

		<p class="decode-result">
			扫描结果:
			<b>{{ result }}</b>
		</p>
		<!--扫描结果-->
		<van-button @click="openCamera">打开相机</van-button>
		<div v-show="show" class="cameraMessage">
			<van-button @click="closeCamera">关闭相机</van-button>
			<van-button  @click="openFlash">打开手电筒</van-button>
			<van-button  @click="switchCamera">相机反转</van-button>
		</div>

		<qrcode-stream v-show="qrcode" :camera="camera" :torch="torchActive" @decode="onDecode" @init="onInit">
			<div>
				<div class="qr-scanner">
					<div class="box">
						<div class="line"></div>
						<div class="angle"></div>
					</div>
					<div class="txt">
						将二维码/条码放入框内，即自动扫描
						<div class="myQrcode">我的二维码</div>
					</div>
				</div>
			</div>
		</qrcode-stream>
	</div>
</template>

<script setup>
// 导入QrcodeStream
import { ref } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';

// 定义一些变量
/* 
扫毛结果
错误信息
初始化控制二维码的扫描区域默认是显示还是隐藏---开始为显示
控制手电筒是否是处于激活状态
摄像头前置还是后置
用于控制一些相机操作按钮的显示与隐藏。
控制二维码扫描区域的显示或隐藏状态。--用于控制 <qrcode-stream> 组件的显示与隐藏。
*/
const result = ref()
const error = ref()
const qrcode = ref(true)
const torchActive = ref(false)
const camera = ref("front")
const show = ref(false)
// const qrcode = ref(false)


// 处理函数
// 扫码成功返回的值并且打印
const onDecode = (result) => {
	console.log(result);
	result.value = result;
}

// 初始化相机
const onInit = async (promise) => {
	const { capabilities } = await promise;

	const TORCH_IS_SUPPORTED = !!capabilities.torch;
	try {
		await promise;
	} catch (error) {
		if (error.name === 'NotAllowedError') {
			error.value = 'ERROR: 您需要授予相机访问权限';
		} else if (error.name === 'NotFoundError') {
			error.value = 'ERROR: 这个设备上没有摄像头';
		} else if (error.name === 'NotSupportedError') {
			error.value = 'ERROR: 所需的安全上下文(HTTPS、本地主机)';
		} else if (error.name === 'NotReadableError') {
			error.value = 'ERROR: 相机被占用';
		} else if (error.name === 'OverconstrainedError') {
			error.value = 'ERROR: 安装摄像头不合适';
		} else if (error.name === 'StreamApiNotSupportedError') {
			error.value = 'ERROR: 此浏览器不支持流API';
		}
	}
}
// 打开相机
const openCamera = () => {
	camera.value = 'rear'
	qrcode.value = true
	show.value = true
}
// 关闭相机
const closeCamera = () => {
	camera.value = 'off'
	qrcode.value = false
	show.value = false
}

// 打开手电筒
const openFlash = () => {
	switch (torchActive.value) {
		case true:
			torchActive.value = false
			break
		case false:
			torchActive.value = true
			break
	}
}

// 相机反转
const switchCamera = () => {
	switch (camera.value) {
		case 'front':
			camera.value = 'rear'
			console.log(camera.value)
			break
		case 'rear':
			camera.value = 'front'
			console.log(camera.value)
			break
	}
}
</script>

<style lang="scss" scoped>
.error {
	font-weight: bold;
	color: red;
}

.cameraMessage {
	width: 100%;
	/* height: 60px; */
	display: flex;
}

.qr-scanner {
	background-image: linear-gradient(0deg,
			transparent 24%,
			rgba(32, 255, 77, 0.1) 25%,
			rgba(32, 255, 77, 0.1) 26%,
			transparent 27%,
			transparent 74%,
			rgba(32, 255, 77, 0.1) 75%,
			rgba(32, 255, 77, 0.1) 76%,
			transparent 77%,
			transparent),
		linear-gradient(90deg,
			transparent 24%,
			rgba(32, 255, 77, 0.1) 25%,
			rgba(32, 255, 77, 0.1) 26%,
			transparent 27%,
			transparent 74%,
			rgba(32, 255, 77, 0.1) 75%,
			rgba(32, 255, 77, 0.1) 76%,
			transparent 77%,
			transparent);
	background-size: 3rem 3rem;
	background-position: -1rem -1rem;
	width: 100%;
	/* height: 100%; */
	height: 100vh;
	/* height: 288px; */
	position: relative;
	background-color: #1110;

	/* background-color: #111; */
}

/* .qrcode-stream-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 82px;
  clear: both;
} */
/* .qrcode-stream-wrapper >>> .qrcode-stream-camera {
  width: 213px;
  height: 210px;
  clear: both;
  margin-top: 39px;
} */
.qr-scanner .box {
	width: 213px;
	height: 213px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	overflow: hidden;
	border: 0.1rem solid rgba(0, 255, 51, 0.2);
	/* background: url('http://resource.beige.world/imgs/gongconghao.png') no-repeat center center; */
}

.qr-scanner .txt {
	width: 100%;
	height: 35px;
	line-height: 35px;
	font-size: 14px;
	text-align: center;
	/* color: #f9f9f9; */
	margin: 0 auto;
	position: absolute;
	top: 70%;
	left: 0;
}

.qr-scanner .myQrcode {
	text-align: center;
	color: #00ae10;
}

.qr-scanner .line {
	height: calc(100% - 2px);
	width: 100%;
	background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #00ff33 211%);
	border-bottom: 3px solid #00ff33;
	transform: translateY(-100%);
	animation: radar-beam 2s infinite alternate;
	animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
	animation-delay: 1.4s;
}

.qr-scanner .box:after,
.qr-scanner .box:before,
.qr-scanner .angle:after,
.qr-scanner .angle:before {
	content: '';
	display: block;
	position: absolute;
	width: 3vw;
	height: 3vw;

	border: 0.2rem solid transparent;
}

.qr-scanner .box:after,
.qr-scanner .box:before {
	top: 0;
	border-top-color: #00ff33;
}

.qr-scanner .angle:after,
.qr-scanner .angle:before {
	bottom: 0;
	border-bottom-color: #00ff33;
}

.qr-scanner .box:before,
.qr-scanner .angle:before {
	left: 0;
	border-left-color: #00ff33;
}

.qr-scanner .box:after,
.qr-scanner .angle:after {
	right: 0;
	border-right-color: #00ff33;
}

@keyframes radar-beam {
	0% {
		transform: translateY(-100%);
	}

	100% {
		transform: translateY(0);
	}
}
</style>

