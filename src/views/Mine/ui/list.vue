<template>
    <div>
        <van-button @click="logout">退出登录</van-button>
    </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/mes.js'
import { useRouter } from 'vue-router'
const pasStore = useLoginStore()
const router = useRouter()
const logout = () => {
    pasStore.SETLOGOUTINFO()
    router.replace("/login")
}
</script>

<style lang="scss" scoped></style>