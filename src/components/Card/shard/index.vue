<template>
    <div class="user">
        <div class="usertop">
            <div class="userimg">
                <img :src="foucesonData.userlogo" alt="">
            </div>
            <div class="username">
                {{ foucesonData.username }}
                <span>分享了文章</span>
            </div>
        </div>
        <div class="usertext">
            {{ foucesonData.userremark }}
        </div>
        <div class="userBox">
            <div class="userBoxLeft">
                {{ foucesonData.usertext }}
                <div class="littletext"> {{ foucesonData.usersource }}</div>
            </div>
            <div class="userBoxRight">
                <img :src="foucesonData.userimg" alt="">
            </div>
        </div>
      
    </div>
    <hr>
</template>

<script setup>
const props = defineProps(['foucesonData'])
</script>

<style lang="scss" scoped>
.user {
    margin-top: 100px;
    font-family: 'ZCOOL KuaiLe', cursive;

    .wh {
        width: 150px;
        height: 150px;
    }

    .usertop {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 50px 100px;

        .userimg {
            @extend .wh;
            border-radius: 100%;
            overflow: hidden;
            background-color: red;

            img {
                @extend .wh;

            }
        }

        .username {
            margin: 0 40px;
        }

    }

    .usertext {
        padding: 50px 70px;
        text-align: left;
        line-height: 85px;
    }

    .userBox {
        width: 80%;
        margin: 40px auto;
        background-color: #f2f2f2;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .userBoxLeft {
            padding: 50px;

            .littletext {
                margin-top: 100px;
                font-size: 50px;
                color: #ccc;
            }
        }

        .userBoxRight {
            width: 400px;
            height: 400px;

            img {
                width: 400px;
                height: 400px;
            }
        }
    }



}

hr {
    width: 80%;
    margin: auto;
}
</style>