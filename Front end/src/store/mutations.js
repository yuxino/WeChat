const mutations = {
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
  },
  showMenu (state,{$event,menuName}) {
    let e = event
    state.menuStatus = true
    state.currentMenu = menuName
    state.position = { top : `${e.clientY}px` , left : `${e.clientX}px` }
  },
  closeMenu (state) {
    state.menuStatus = false
  }
}

export default mutations