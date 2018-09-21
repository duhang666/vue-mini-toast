<template>
    <transition name="fade">
        <div class="alert_wrapper" v-show="isShow">
            <transition name="pop">
                <div class="alert_cont" v-show="isShow">
                    <div class="cont">
                        <div class="title">{{option.title}}</div>
                        <p class="msg">{{option.msg}}</p>
                    </div>
                    <div class="btn_list">
                        <div class="btn_item" :style="{color: option.btnColor}" @click="isShow=false;callback()">{{option.btn}}</div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "alert",
        data() {
            return {
                option: {
                    title: '提示',
                    msg: '确定操作？',
                    btn: '确定',
                    btnColor: '#1f91f0',
                },
                isShow: false
            }
        },
        methods: {
            callback() {

            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.2s linear;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .pop-enter-active, .pop-leave-active {
        transition: all 0.06s linear;
    }

    .pop-enter, .pop-leave-to {
        transform: scale(0);
        opacity: 0;
    }

    .alert_wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .alert_cont {
        width: 72vw;
        text-align: center;
        font-size: 14px;
        border-radius: 12px;
        overflow: hidden;
        background-color: #fff;
        color: #333;
    }

    .alert_cont .cont {
        padding: 15px 10px;
        border-bottom: 1px solid #eee;
    }

    .alert_cont .cont .title {
        padding-bottom: 8px;
        font-size: 17px;
        font-weight: bold;
    }

    .alert_cont .btn_list {
        display: flex;
    }

    .alert_cont .btn_list .btn_item {
        flex-grow: 1;
        padding: 9px 0;
        font-size: 16px;
    }
</style>