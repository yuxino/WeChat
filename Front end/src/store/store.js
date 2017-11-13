import Vue from 'vue'
import Vuex from 'vuex'
import Subject from './subject'

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
    currentView: 'chat',
    currentChat: 0,
    currentSubject: 0,
    currentContact: 0,
    subject: Subject
  },
  mutations: {
    viewChange (state,viewName) {
      state.currentView = viewName
    },
    chatChange (state,index) {
      state.currentChat = index
    },
    subjectChange (state,index) {
      state.currentSubject = index
    }
  }
})

export default store