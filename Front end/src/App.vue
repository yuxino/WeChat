<script>
import { actions } from './store';

import Card from 'components/card';
import List from 'components/list';
import Top from 'components/top';
import Text from 'components/text';
import Message from 'components/message';


export default {
    components: { Card, List, Top , Text, Message },
    vuex: {
        actions: actions
    },
    created () {
        this.initData();
    }
}
</script>

<template>
<div id="app">
    <div class="sidebar">
        <card></card>
        <list></list>
    </div>
    <div class="main">
        <top></top>
        <message></message>
        <text></text>
    </div>
</div>
</template>

<style lang="less" scoped>
#app {
    margin: 150px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #FFFFFF;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 100px)';
    }
}
</style>
