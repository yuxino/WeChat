<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions,
        getters: {
            user: ({ user }) => user,
            filterKey: ({ filterKey }) => filterKey
        }
    },
    methods: {
        onKeyup (e) {
            this.search(e.target.value);
        }
    }
};
</script>

<template>
<div class="card">
    <header>
        <!--<img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">-->
        <!--<p class="name">{{user.name}}</p>-->
    </header>
    <footer>
        <input class="search" type="text" placeholder="search user..." @keyup="onKeyup | debounce 150">
    </footer>
</div>
</template>

<style scoped lang="less">
.card {
    padding: 12px;

    footer {
        margin-top: 10px;
    }

    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
        font-size: 16px;
    }
    .search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #000000;
        height: 30px;
        line-height: 30px;
        border: 0;
        border-radius: 4px;
        outline: none;
        background-color: #F1F1F1;
    }
}
</style>