<template>
    <div class="studyCard">
        <div class="leftCard">
            <div>
                {{ CardData.sourcedesc }}
            </div>
            <div>
                {{ CardData.sourceobject }} 共  {{ CardData.sourcenum }}讲
            </div>
            <div class="studyimg">
                <img :src="CardData.sourceimage" alt="">
            </div>
            <div class="information">
                <div> {{ CardData.sourcename }} </div>
                <div>￥  {{ CardData.sourceprice }} </div>
            </div>
        </div>
        <div class="rightCard">
            <div>
                2019秋-CMO数学班
            </div>
            <div>
                数学 共十六讲
            </div>
            <div class="studyimg">
                <img src="../../../../../public//QQ.png" alt="">
            </div>
            <div class="information">
                <div>木子老师</div>
                <div>￥ 189</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['CardData'])
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.wh {
    width: 150px;
    height: 150px;
}

.studyCard {
    font-family: 'ZCOOL KuaiLe', cursive;
    @extend .flex;
    flex-wrap: wrap;
  
    margin: 60px 0;

    .leftCard,
    .rightCard {
        @extend .flex;
        width: 40%;
        height: 700px;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        border: 1px solid #ccc;
        padding: 20px;
        box-shadow: 0 5px 40px rgba(0, 0, 0, 0.5);
        cursor: pointer;

        &:hover {
            transform: translateY(-10px);
        }
    }

    .studyimg {
        @extend .wh;

        border-radius: 100%;
        background-color: red;
        overflow: hidden;

        img {
            @extend .wh;
        }
    }

    .information {
        width: 100%;
        @extend .flex;
        justify-content: space-between;

        div {
            &:nth-child(2) {
                color: red;
            }
        }
    }
}
</style>