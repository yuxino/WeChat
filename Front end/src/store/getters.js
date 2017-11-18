import _ from 'lodash'

const getters = {
  // 合并结果
  chatList: state => {
    let chats = {}
    _.forEach(state.chat , (item,userId) => {
      chats[userId] = {...state.contact[userId],...item}
    })
    return chats
  },
  userName: state => {
    return state.contact[state.currentChat].userName
  }
}

export default getters