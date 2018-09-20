<template>
    <div id="app">
        <br/>
        <button @click="pop">点击弹出pop提示</button>
        <br/>
        <br/>
        <button @click="alert">点击弹出alert提示</button>
        <br/>
        <br/>
        <button @click="confirm">点击弹出confirm提示</button>
        <br/>
        <br/>
        <button @click="actionSheet">点击弹出actionSheet提示</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            pop() {
                this.$pop({
                    msg: '这是一条pop提示！',
                    align: 'middle'
                });
            },
            alert() {
                this.$alert({
                    title: '标题',
                    msg: '这是一条alert提示！',
                    btn: 'OK',
                    btnColor: 'green'
                });
            },
            confirm() {
                this.$confirm({
                    title: '标题',
                    msg: '这是一条prompt询问？',
                    btn: ['Yes', 'No'],
                    btnColor: ['red', 'green']
                }, (index) => {
                    console.log(index);
                });
            },
            actionSheet() {
                this.$actionSheet({
                    title: '这是一个actionSheet',
                    btn: ['选项1', '选项2', '选项3'],
                    btnColor: ['red', 'green', 'blue']
                }, (item, index) => {
                    console.log(`${index} - ${item}`);
                });
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
