import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    views: [{
        viewName: 'chat',
        iconName: 'icon-qipao',
      },{
        viewName: 'subject',
        iconName: 'icon-wenzhang_weixuanzhong',
      },{
        viewName: 'contact',
        iconName: 'icon-lianxiren',
      }
    ],
    currentView: 'chat'
  },
  mutations: {
    viewChange (state,viewName) {
      state.currentView = viewName
    }
  }
})

export default store