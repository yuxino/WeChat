import chat    from './chat'
import subject from './subject'
import contact from './contact'

const state = {
  currentView: 'chat',
  currentChat: '1000',
  currentSubject: 0,
  currentContact: 0,
  currentMenu: 'ChatListMenu',
  chat,
  subject,
  contact,
  text: {},
  menuStatus: false,
  position: { top : '0px' , left : '0px' }
}

export default state