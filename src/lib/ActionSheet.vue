<template>
    <transition name="fade">
        <div class="alert_wrapper" v-show="isShow">
            <transition name="slide">
                <div class="alert_cont" v-show="isShow">
                    <div class="btn_list">
                        <div class="title" v-if="option.title.length">{{option.title}}</div>
                        <div class="btn_item" v-for="item,index in option.btn" :key="index" :style="{color: option.btnColor[index]}"
                             @click="isShow=false;callback(item, index)">{{item}}
                        </div>
                    </div>
                    <div class="cancel" @click="isShow=false">取消</div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "actionSheet",
        data() {
            return {
                option: {
                    title: '',
                    btn: ['选项1', '选项2'],
                    btnColor: ['#3e9af0', '#3e9af0']
                },
                isShow: false
            }
        },
        methods: {
            callback(index) {

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

    .slide-enter-active, .slide-leave-active {
        transition: transform 0.1s linear;
    }

    .slide-enter, .slide-leave-to {
        transform: translateY(100%);
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
        position: absolute;
        bottom: 0;
        left: 8px;
        width: calc(100% - 16px);
        text-align: center;
    }

    .btn_list {
        border-radius: 12px;
        overflow: hidden;
        background-color: #fff;
    }

    .btn_list .title {
        padding: 10px 0;
        font-size: 14px;
        color: #999;
        border-bottom: 1px solid #eee;
    }

    .btn_list .btn_item {
        padding: 12px 0;
        border-bottom: 1px solid #eee;
    }

    .btn_list .btn_item:last-child {
        border-bottom: none;
    }

    .cancel {
        margin: 8px 0;
        padding: 12px 0;
        border-radius: 12px;
        overflow: hidden;
        font-weight: bold;
        background-color: #fff;
        color: #1f91f0;
    }
</style>