<template>
    <div class="centerchat">
        <div v-for="item, index in messages" :key="index">
            <div v-if="isleftchat" class="message leftchat">
                <div class="img">头像</div>
                <div class="triangle"></div>
                <textarea class="text" style="resize:none; " readonly>{{ item }}</textarea>
            </div>
            <div v-else class="message rightchat">
                <textarea class="text" style="resize:none; " readonly>{{ item }}</textarea>
                <div class="triangle"></div>
                <div class="img">头像</div>
            </div>
        </div>

    </div>
</template>
  
<script setup>
import { ref, watchEffect } from "vue"

const props = defineProps(['sendData', "randomMessage"])
const messages = ref([])
const isleftchat = ref(true)
watchEffect(() => {
    if (props.sendData) {
        isleftchat.value = false;
        messages.value.push(props.sendData);
    }

    if (props.randomMessage) {
        isleftchat.value = true;
        messages.value.push(props.randomMessage);
    }
})
</script>
  
<style lang="scss" scoped>
.centerchat {
    display: flex;
    flex-direction: column;
}

.message {
    max-width: 70%;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    word-wrap: break-word;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;


}

.leftchat {
    align-self: flex-start;

    .img {
        width: 200px;
        height: 200px;
        background-color: skyblue;
        border-radius: 200px;
        margin-right: 100px;
        line-height: 200px;
    }


    .triangle {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-top: 50px solid transparent;
        border-bottom: 50px solid transparent;
        border-right: 50px solid #000;
        position: absolute;
        top: 70px;
        left: 216px;
    }




    .text {
        height: 200px;
        padding: 0 50px;
        border-radius: 40px;
        line-height: 200px;
        background-color: #fff;
    }
}

.rightchat {
    align-self: flex-end;

    .img {
        width: 200px;
        height: 200px;
        background-color: skyblue;
        border-radius: 200px;
        margin-left: 100px;
        line-height: 200px;
    }


    .triangle {
        width: 0;
        height: 0;
        border-left: 50px solid #000;
        border-top: 50px solid transparent;
        border-bottom: 50px solid transparent;
        border-right: 50px solid transparent;
        position: absolute;
        top: 70px;
        right: 216px;
    }




    .text {
        height: 200px;
        padding: 0 50px;
        border-radius: 40px;
        line-height: 200px;
        background-color: #fff;
    }
}
</style>
  