import Vue from 'vue'
import _ from 'lodash'

// 置顶列表里面和id相等的一项
const topOnList = function (list, id) {
  deleteOnList(list, id)
  list.unshift(id)
}
// 删除里面对应的id
const deleteOnList = function (list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === id) {
      // 移除相等的值
      list.splice(i, 1)
      break
    }
  }
}
// 查询字符串内是否包含指定字符
const container = function (str, target) {
  return String(str).indexOf(target) >= 0
}
const mutations = {
  viewChange (state, viewName) {
    state.currentView = viewName
  },
  chatChange (state, chatId) {
    state.currentChatId = chatId
  },
  subjectChange (state, subjectId) {
    state.currentSubjectId = subjectId
  },
  contactChange (state, contactId) {
    state.currentContactId = contactId
  },
  showMenu (state, {$event, chatId, menuName}) {
    let e = event
    state.menuStatus = true
    state.currentMenu = menuName
    state.menuPosition = { top: `${e.clientY}px`, left: `${e.clientX}px` }
    state.menuChatId = container(chatId, '_') ? chatId.substr(1) : chatId
  },
  closeMenu (state) {
    state.menuStatus = false
  },
  sendMessage (state, message) {
    // 将当前聊天对象置顶
    topOnList(state.chat, state.currentChatId)
    _.isEmpty(state.chatsHistory[state.currentChatId]) && Vue.set(state.chatsHistory, state.currentChatId, [])
    let history = state.chatsHistory[state.currentChatId]
    history.push({msg: message, time: new Date(), self: true})

    // 强行触发Getter更新
    let id = state.currentChatId
    state.currentChatId = 0
    state.currentChatId = id
  },
  newChat (state, chatId) {
    // 聊天对象切换
    topOnList(state.chat, chatId)
    // 视图切换
    state.currentChatId = chatId
    state.currentView = 'chat'
  },
  closeChat (state) {
    deleteOnList(state.chat, state.menuChatId)
    // clear history
    Vue.delete(state.chatsHistory, state.menuChatId)
    state.currentChatId = void 0
    state.menuStatus = false
  },
  clearHistory (state, chatId) {
    Vue.delete(state.chatsHistory, chatId)
    // close Menu
    state.menuStatus = false
  },
  showCard (state, {$event, currentChatId}) {
    let e = event
    state.cardChatId = currentChatId
    state.cardStatus = true
    state.cardPosition = { top: `${e.clientY}px`, left: `${e.clientX}px` }
  },
  closeCard (state) {
    state.cardStatus = false
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
