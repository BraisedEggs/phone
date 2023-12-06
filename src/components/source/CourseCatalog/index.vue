<template>
    <div class="source" v-for="value, key in videoChapter" :key="key">
        <div>
            <h3>{{ key }}-- {{ value.title }}</h3>
            <ul v-for="item, index in value.context" :key="index">
                <li>
                    {{ item }}
                </li>
            </ul>
            <div class="gap"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['videoChapter'])
</script>

<style lang="scss" scoped>
.source {
    padding: 0 200px;

    >div {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .gap {
        width: 100%;
        height: 30px;
        background-color: #ccc;
    }
}

ul li {
    list-style-type: none;
    background: url("./../../../../public/QQ.png") no-repeat 0rem 0.2rem;
    background-size: 1rem 1rem;
    text-indent: 2em;
    margin: 90px;
    line-height: 1;
    text-align: left;
}
</style>