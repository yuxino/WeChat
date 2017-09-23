<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions,
        getters: {
            sessions: ({ sessions, filterKey }) => {
                let result = sessions.filter(session => session.user.name.includes(filterKey));
                return result;
            },
            currentId: ({ currentSessionId }) => currentSessionId
        }
    }
};
</script>

<template>
<div class="list">
    <ul>
        <li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
            <img class="avatar"  width="40" height="40" :alt="item.user.name" :src="item.user.img">
            <p class="name">{{item.user.name}}</p>
            <p class="lastInfo">吼吼吼全给党</p>
        </li>
    </ul>
</div>
</template>

<style scoped lang="less">
.list {
    li {
        padding: 12px 15px;
        cursor: pointer;
        position: relative;
        transition: background-color .1s;

        &:hover {
            background-color: #F1F1F1;
        }
        &.active {
            background-color: #419FD9;
        }
        &.active .lastInfo{
            color: #FFFFFF
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 100px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 8px;
        color: black;
        font-weight: 500;
        top: 12px;
        position: absolute;
    }
    .lastInfo {
        display: inline-block;
        margin: 0 0 0 8px;
        color: #bdbdbd;
        font-weight: 500;
        top: 35px;
        position: absolute;
    }
}
</style>