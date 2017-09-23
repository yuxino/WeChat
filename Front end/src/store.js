import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        user: {
            name: 'coffce',
            img: 'dist/images/avatar.jpg'
        },
        sessions: [
            {
                id: 1,
                user: {
                    name: '贝奥兰迪',
                    img: 'dist/images/deep.png'
                },
                messages: [
                    {
                        content: 'Deep Dark Fantasy',
                        date: now
                    },
                    {
                        content: 'So Fucking Deep',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'van♂样',
                    img: 'dist/images/van.png'
                },
                messages: []
            }
        ],
        currentSessionId: 1,
        filterKey: ''
    },
    mutations: {
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        SEND_MESSAGE ({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
        }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
};
