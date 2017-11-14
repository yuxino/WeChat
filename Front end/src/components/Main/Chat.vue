<template>
  <div>
      <ChatTitle :title="userName"></ChatTitle>
      <ChatContent></ChatContent>
      <div class="content-area">
          <div class="tools-bar">
              <i class="iconfont icon-face ccc"></i>
          </div>
          <div class="text-box">
              <div class="text-wrapper">
                  <textarea @input="type" @keydown.enter.prevent="sumbit" @keyup.ctrl.enter="newLine" :value="textContent" spellcheck="false"></textarea>
              </div>  
          </div>
          <div class="btn-box">
              <span class="describe">按下Ctrl+Enter发送</span> 
              <button class="send">发送</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChatTitle    from './Title'
import ChatContent  from './Content'


export default {
  name: 'Chat',
  components: { ChatTitle , ChatContent  },
  computed: {
    ...mapState(['currentChat','chat','contact','text']),
    userName() {
      return this.contact[this.currentChat] ? this.contact[this.currentChat].userName : ''
    },
    textContent() {
      return this.text[this.currentChat]
    }
  },
  methods: {
    type (e) {
      this.$store.commit('updateText',e.target.value)
    },
    sumbit (e) {
      // sumibt text 
    },
    newLine (e) {
      e.target.value += "\n"
    }
  }
}
</script>

<style lang="sass" scoped>
  .content-area
    min-height: 200px
    position: absolute
    margin-right: 19px
    border-top: 1px solid #d6d6d6
    bottom: 0
    left: 0
    right: 0

  .tools-bar
    line-height: 30px
    padding: 5px 17px

  .text-box
    position: absolute
    width: 100%
    left: 0
    right: 0
    top: 42px
    bottom: 40px

  .text-wrapper
    height: 100%
    padding-left: 20px

  .text-wrapper textarea
    width: 100%
    height: 100%
    padding: 0
    margin: 0
    border: 0
    font-size: 16px
    font-family: inherit
    background: none
    outline: none
    overflow: auto
    resize: none

  .btn-box
    line-height: 30px
    position: absolute
    bottom: 10px
    text-align: right
    left: 0
    right: 0

  .send
    background-color: #fff
    color: #222
    padding: 3px 30px
    display: inline-block
    border: 1px solid #c1c1c1
    border-radius: 4px
    -moz-border-radius: 4px
    -webkit-border-radius: 4px
    font-size: 14px
    cursor: pointer

  .describe
    color: #888
    font-size: 12px
    margin-left: 10px
    margin-right: 7px
</style>