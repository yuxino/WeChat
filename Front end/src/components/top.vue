<script>
import { actions } from '../store';

export default {
    vuex: {
        getters: {
            session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId)
        }
    },
    data () {
        return {
            content: ''
        };
    },
    methods: {
        
    }
};
</script>

<template>
    <div class="header">
        <div class="container">
            <p>{{session.user.name}}</p>
            <p class="lastSeen">Last Seen 16.09.07</p>
        </div>
    </div>
</template>

<style scoped lang="less">
    .header{
        background: white;
        height: 50px;
    }
    .container{
        padding: 10px;
        font-size: 12px;

        p{
            margin: 0px;
        }
    }
    .lastSeen{
        color: #878787;
    }
</style>