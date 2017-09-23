<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions
    },
    data () {
        return {
            content: ''
        };
    },
    methods: {
        onKeyup (e) {
            if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                this.sendMessage(this.content);
                this.content = '';
            }
        }
    }
};
</script>

<template>
<div class="text">
    <textarea placeholder="Write a message..." v-model="content" @keyup="onKeyup"></textarea>
</div>
</template>

<style lang="less" scoped>
.text {
    height: 50px;
    border-top: solid 1px #ddd;

    textarea {
        padding: 15px;
        height: 100%;
        width: 100%;
        border: 1px solid #E7E7E7;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
}
</style>