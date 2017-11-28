import _ from 'lodash'
import pyfl from '@/libs/pyfl/index.js'

// 获取拼音首字母
// 如果有且为[a-zA-Z]範圍内的字符则返回小写的字母
// 否则统一返回 ~
const getFirstLetter = char => {
  let result = pyfl(char).charAt(0)
  return /[a-zA-Z]/.test(result) ? result.toUpperCase() : '~'
}

const sortByKey = collection => {
    // 排序 
    // 相关方案https://github.com/lodash/lodash/issues/1459
    return _(collection).toPairs().sortBy(0).fromPairs().value()
}

const formatTime = date => {
  let hour = `${date.getHours()}`.padStart(2,'0')
  let minutes = `${date.getMinutes()}`.padStart(2,'0')
  return `${hour}:${minutes}`
}

const getters = {
  // `最近`联系人列表
  chatList: state => {
    let chats = {}
    state.chat.forEach(chatId => {
      let lastMessage = _.last(state.chatsHistory[chatId])
      chats[chatId] = {
        ...state.contact[chatId], // 獲取chatId對應的用户信息
        time: formatTime(lastMessage.time),
        content: lastMessage.msg
    }})
    return chats
  },
  // 联系人列表
  contactList: state => {
    let contacts = {}
    _.forEach(state.contact , (item,userId) => {
      // 如果有备注 则优先备注
      let firstLetter = item.remarks  != '' ? getFirstLetter(item.remarks) : getFirstLetter(item.userName)
      if(!contacts[firstLetter]){
        contacts[firstLetter] = {}
      }
      contacts[firstLetter][userId] = item
    })
    // TODO 这是一个可优化的选项 
    return sortByKey(contacts)
  },
  userName: state => {
    return state.currentChatId ? state.contact[state.currentChatId].userName : ''
  },
  currentContact: state => {
    return state.currentContactId ? state.contact[state.currentContactId] : null
  }
}

export default getters