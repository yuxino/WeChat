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

const getters = {
  // `最近`联系人列表
  chatList: state => {
    let chats = {}
    _.forEach(state.chat , (item,userId) => {
      chats[userId] = {...state.contact[userId],...item}
    })
    return chats
  },
  // 联系人列表
  contactList: state => {
    let contacts = {}
    _.forEach(state.contact , (item,userId) => {
      let firstLetter = getFirstLetter(item.userName)
      if(!contacts[firstLetter]){
        contacts[firstLetter] = {}
      }
      contacts[firstLetter][userId] = item
    })
    // TODO 这是一个可优化的选项 
    return sortByKey(contacts)
  },
  userName: state => {
    return state.contact[state.currentChat].userName
  }
}

export default getters