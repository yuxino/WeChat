import pyfl from '@/libs/pyfl/index'
import Vue from 'Vue'

var flag = true

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
  showMenu (state,{$event,menuName}) {
    let e = event
    state.menuStatus = true
    state.currentMenu = menuName
    state.position = { top : `${e.clientY}px` , left : `${e.clientX}px` }
  },
  closeMenu (state) {
    state.menuStatus = false
  },
  sendMessage (state , message) {
    // 将当前聊天对象置顶
    let chat = state.chat
    for(let index = 0 ; index < chat.length ; index++) {
      if(chat[index] === state.currentChatId) {
        chat.splice(index, 1)
        chat.unshift(state.currentChatId)
        break
      }
    }
    // cnasdkasldjkasldjkasldjksajd
    if(_.isEmpty(state.chatsHistory[state.currentChatId])){
      Vue.set(state.chatsHistory,state.currentChatId,[])
    }
    let history = state.chatsHistory[state.currentChatId]
    history.splice(history.length,1,{msg:message,time: new Date(),self:false})
  },
  newChat (state,chatId) {
    // 聊天对象切换
    let chat = state.chat
    _.remove(chat,chatId)
    chat.unshift(chatId)
    // 视图切换
    state.currentChatId = chatId
    state.currentView = 'chat'
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