<template>
    <div>
        // todo:这是搜索框没有写
        <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </div>
</template>

<script setup>
import { ref } from "vue";
// todo:这是搜索框没有写
const value = ref()
</script>

<style lang="scss" scoped></style>