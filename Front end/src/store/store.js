import Vue     from 'vue'
import Vuex    from 'vuex'
import chat    from './chat'
import subject from './subject'
import contact from './contact'
import _       from 'lodash'

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
    currentChat: '1000',
    currentSubject: 0,
    currentContact: 0,
    chat,
    subject,
    contact,
    text: {
      "1000" : "balbabla"
    }
  },
  mutations: {
    viewChange (state,viewName) {
      state.currentView = viewName
    },
    chatChange (state,userId) {
      state.currentChat = userId
    },
    subjectChange (state,index) {
      state.currentSubject = index
    },
    updateText (state,content) {
      state.text[state.currentChat] = content
    }
  }
})

export default store