import chat    from './chat'
import subject from './subject'
import contact from './contact'

const state = {
  // 当前视图
  currentView: 'contact',
  // 各种视图列表的数据
  chat,
  subject,
  contact,
  // 各种视图列表选中的条目
  currentChat: '1000',
  currentSubject: 0,
  currentContact: 0,
  // 输入框
  text: {},
  // 按钮相关状态
  menuStatus: false,
  currentMenu: 'ChatListMenu',
  position: { top : '0px' , left : '0px' }
}

export default state