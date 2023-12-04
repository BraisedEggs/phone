<template>
    <div>
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="friends-o" mode="link"
            @click="setHrefHandler">关注感兴趣用户，丰富你的动态</van-notice-bar>
    </div>
    <div v-for="item, index in fouceson " ::key="index">
        <ShardCard :foucesonData="item" />
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { onMounted, ref } from "vue";
import { useDiscoverFocusOnApi } from "@/services/discover";

// 路由跳转
const router = useRouter()
const setHrefHandler = () => {
    router.replace("/discover/recommend")
}

// 获取请求
const fouceson = ref()
onMounted(async () => {
    let foucesonRet = await useDiscoverFocusOnApi()
    console.log(foucesonRet.data)
    fouceson.value = foucesonRet.data
    console.log(fouceson.value)
})
</script>

<style lang="scss" scoped></style>