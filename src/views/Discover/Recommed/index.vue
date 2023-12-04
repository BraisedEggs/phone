<template >
    <div v-for="item, index in recommed " ::key="index">
        <RightCard :recommedData="item" />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useDiscoverRecommendApi } from "@/services/discover";



const recommed = ref()
onMounted(async () => {
    let recommendRet = await useDiscoverRecommendApi()
    recommed.value = recommendRet.data
})
</script>

<style lang="scss" scoped></style>