<template>
    <van-nav-bar title="选择地区" left-text="返回" right-text="确定" left-arrow @click-left="onClickLeft"
        @click-right="onClickRight" />
    <van-index-bar>
        <div class="gap">

        </div>
        <div v-for="index in areaIndex" :key="index" class="city">
            <van-index-anchor :index="index" />
            <van-cell v-for="city in cities[index]" :key="city" :title="city" @click="searchArea(city)" class="cityArea" />
        </div>
    </van-index-bar>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useK2AreaApi } from '@/services/k2.js'
import deepCopy from '@/tools/deepCopy.js'
import { useRouter } from 'vue-router';
const cities = ref();
const areaIndex = ref([])
onMounted(async () => {
    let areaRet = await useK2AreaApi()
    cities.value = deepCopy(areaRet.data)
    // 获取所有索引
    for (let key in cities.value) {
        areaIndex.value.push(key)

    }
});
// 点击选中的地区
const cityItem = ref()
const searchArea = (value) => {
    cityItem.value = value
};


// 处理左侧按钮点击事件
const router = useRouter()
const onClickLeft = () => {
    router.go(0)
};

// 处理右侧按钮点击事件
const emit = defineEmits(['sendcityitem'])
const onClickRight = () => {
    emit('sendcityitem', cityItem.value)
};
</script>
  
<style lang="scss" scoped>
.van-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* 根据需要调整z-index的值 */
}

.gap {
    height: 200px;
}

/* 确保内容不被遮挡 */
.van-index-bar {
    margin-top: 44px;

    /* 44px是van-nav-bar的高度，根据实际情况调整 */
}


.cityArea {
    font-family: 'ZCOOL KuaiLe', cursive;
    padding-left: 100px;

    :hover {
        cursor: pointer;
        background-color: #ccc;
    }
}
</style>
  