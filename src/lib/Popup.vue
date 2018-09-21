<template>
    <transition name="fade">
        <div :class="`pop_cont ${option.align} ${option.theme}`" v-show="isShow">{{msg || option.msg}}</div>
    </transition>
</template>

<script>
    export default {
        name: "popup",
        data() {
            return {
                option: {
                    msg: '',
                    align: 'middle',
                    theme: 'black',
                    delay: 2000
                },
                msg: '',
                isShow: false
            }
        },
        watch: {
            isShow(val) {
                if (val) {
                    setTimeout(() => {
                        this.isShow = false;
                        this.callback();
                    }, this.option.delay);
                }
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
        transition: all 0.2s linear;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .pop_cont {
        position: fixed;
        left: 50%;
        z-index: 99999;
        transform: translate(-50%, -50%);
        max-width: 86vw;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 14px;
    }

    .pop_cont.middle {
        top: 50%;
    }

    .pop_cont.top {
        top: 10%;
    }

    .pop_cont.bottom {
        top: 90%;
    }

    .pop_cont.black {
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
    }

    .pop_cont.light {
        border: 1px solid #999;
        background-color: rgba(255, 255, 255, 0.6);
        color: #888;
    }
</style>