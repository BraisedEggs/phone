<template>
    <div class="studyCard">
        <div class="cardTop">
            <div>{{ livesourceData.subject }}</div>
            <div>{{ livesourceData.livebroadcast }}</div>
        </div>
        <div class="cardCenter">
            {{ livesourceData.livedesc }}
        </div>
        <div class="cardBottom">
            <div>
                <div v-for="item, index in  livesourceData.liveteach" :key="index">
                    <img :src="item.image" alt="">
                </div>


            </div>
            <div>
                $ {{ livesourceData.liveprice }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['livesourceData'])
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.studyCard {
    font-family: 'ZCOOL KuaiLe', cursive;
    margin: 90px;
    padding: 80px;
    border: 1px solid #ccc;
    @extend .flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
    }

    .cardTop {
        @extend .flex;
        justify-content: start;

        div {
            &:nth-child(1) {
                width: 200px;
                height: 100px;
                line-height: 100px;
                text-align: center;
                color: #fff;
                background-color: #2a2727;
                margin: 0 50px;
            }
        }

    }

    .cardCenter {
        margin: 50px;
        color: #ccc;
    }

    .cardBottom {
        margin: 0 50px;
        width: 100%;
        @extend .flex;

        div {

            &:nth-child(1) {
                width: 40%;
                @extend .flex;

                div {
                    width: 150px;
                    height: 150px;
                    border-radius: 100%;
                    background-color: red;
                    overflow: hidden;

                    img {
                        width: 150px;
                        height: 150px;

                    }
                }

            }

            &:nth-child(2) {

                color: red;
            }
        }
    }
}
</style>