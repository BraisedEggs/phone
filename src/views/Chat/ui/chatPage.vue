<template>
    <div class="centerchat">
        <div v-for="(item, index) in messages" :key="index" :class="{ 'leftchat': item.isLeft, 'rightchat': !item.isLeft }">
            <div class="img" v-if="item.isLeft">头像</div>
            <div class="lefttriangle" v-if="item.isLeft"></div>
            <textarea class="text" readonly>{{ item.text }}</textarea>
            <div class="righttriangle" v-if="!item.isLeft"></div>
            <div class="img" v-if="!item.isLeft">头像</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, watch } from "vue"

const props = defineProps(['sendData', 'randomMessage'])
const messages = ref([])

// 侦听把穿过来的数据放入数组
watch([() => props.sendData, () => props.randomMessage], ([sendData, randomMessage]) => {
    if (sendData) {
        removeDuplicates()
        console.log(messages.value)
        messages.value.push({ text: sendData, isLeft: true })

    }
    if (randomMessage) {
        removeDuplicates()
        console.log(messages.value)
        messages.value.push({ text: randomMessage, isLeft: false })

    }
})
// 去重数据
const removeDuplicates = () => {
    const seenMessages = new Set();
    messages.value = messages.value.filter((message) => {
        const key = message.text + message.isLeft;
        return !seenMessages.has(key) && seenMessages.add(key);
    });
};

</script>
  
<style lang="scss" scoped>
/* 公共样式 */

.flex {
    display: flex;
    align-items: center;
    margin: 50px 0;
    border-radius: 50px;
    position: relative;
}

.image {
    width: 200px;
    height: 200px;
    background-color: lightblue;
    border-radius: 50%;
    line-height: 200px;
}

.context {
    max-width: 80%;
    padding: 10px;
    background-color: #fff;
    border-radius: 50px;
}

.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-right: 50px solid #000;
    position: absolute;
    top: 100px;

    transform: translateY(-50%);
}

/* 各自的样式 */
.centerchat {
    display: flex;
    flex-direction: column;
}


.leftchat {
    align-self: flex-start;

    @extend .flex;

    .img {
        @extend .image;
        margin-right: 10px;
    }

    .lefttriangle {
        @extend .triangle;
        left: 220px;
    }

    .text {
        margin-left: 100px;
        @extend .context;
    }
}

.rightchat {
    align-self: flex-end;
    @extend .flex;

    .img {
        @extend .image;
        margin-left: 10px;
    }

    .righttriangle {
        @extend .triangle;
        border-left: 50px solid #000;
        border-right: 50px solid transparent;
        position: absolute;
        right: 220px;
    }

    .text {
        margin-right: 100px;
        @extend .context;
    }
}
</style>
  