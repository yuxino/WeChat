import pyfl from '@/libs/pyfl/index'
import Vue from 'Vue'

const mutations = {
  viewChange (state,viewName) {
    state.currentView = viewName
  },
  chatChange (state,chatId) {
    state.currentChatId = chatId
  },
  subjectChange (state,subjectId) {
    state.currentSubjectId = subjectId
  },
  contactChange (state,contactId) {
    state.currentContactId = contactId
  },
  updateText (state,content) {
    state.text[state.currentChat] = content
  },
  showMenu (state,{$event,menuName}) {
    let e = event
    state.menuStatus = true
    state.currentMenu = menuName
    state.position = { top : `${e.clientY}px` , left : `${e.clientX}px` }
  },
  closeMenu (state) {
    state.menuStatus = false
  },
  // TODO 还没想好怎么做这里
  addContact: state => {
    // Vue.set(state.contact ,  , {
    //     userName: 'Z.',
    //     avatar  : '/static/av7.jpg',
    //     bio     : '慢热 ！',
    //     sex     : 'male',
    //     remarks : '张尻乐',
    //     location: '上海 虹口'
    // })
  }
}

export default mutations