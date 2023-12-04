<!--
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-29 14:43:33
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-11-30 15:27:03
-->
<template>
    <div class="Carousel" style="height: 200px; width:100%" >
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in carousel" :key="image">
                <img :src="image" style="height: 200px; width:100%" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>

const props = defineProps(['carousel'])
</script>

<style lang="scss" scoped>
.Carousel {
    width: 100%;
    height: 900px;
    background-color: blue;

    .my-swipe {
        .van-swipe__track {
            width: 100%;
            height: 200px;

            .van-swipe-item {
                >img {
                    width: 100%;
                    height: 200px;
                }

            }
        }
    }


}
</style>