<template>
  <div>
      <chat-title>{{ userName }}</chat-title>
      <div class="content" @contextmenu.prevent="showMenu({$event,menuName})">
        
      </div>
      <div class="content-area">
          <div class="tools-bar">
              <i class="iconfont icon-face ccc"></i>
          </div>
          <div class="text-box">
              <div class="text-wrapper">
                  <textarea @input="type" @keyup.ctrl.enter="sumbit" :value="textContent" spellcheck="false"></textarea>
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
import { mapState , mapMutations , mapGetters }     from 'vuex'
import ChatTitle        from './Title'

export default {
  name: 'ChatArea',
  components: { ChatTitle },
  data() {
    return {
      menuShow: false,
      menuName: 'ChatAreaMenu'
    }
  },
  computed: {
    ...mapState(['currentChat','chat','contact','text']),
    ...mapGetters(['userName']),
    textContent() {
      return this.text[this.currentChat]
    }
  },
  methods: {
    ...mapMutations(['updateText','showMenu']),
    type (e) {
      this.updateText(e.target.value)
    },
    sumbit (e) {
      // sumibt text
      e.target.value = ''
      this.updateText(e.target.value)
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

  .content
    position: absolute
    top: 44px
    left: 0
    right: 0
    bottom: 200px
    padding: 0 20px
    overflow: auto

  .time
    font-size: 12px
    padding: 1px 18px
    color: #b2b2b2
    text-align: center

  .message
    text-align: right
    margin-bottom: 15px

  .message > div
    position: relative
    max-width: 500px
    background-color: #b2e281
    color: black
    display: inline-block
    word-wrap: break-word

  .message > div:after
    position: absolute
    top: 14px
    border: 6px solid transparent
    content: " "
    border-left-color: #b2e281
    border-left-width: 4px

  .bubble
    padding: 5px 10px
    text-align: left
    font-size: 14px

  .message > img
    width: 40px
    height: 40px
    margin-left: 15px
    float: right

  .self
    text-align: left

  .self > img
    float: left
    margin-right: 15px

  .self > div:after
    content: " "
    position: absolute
    top: 14px
    right: 100%
    border: 6px solid transparent
    border-right-color: white
    border-right-width: 4px

  .self > div
    background-color: white
</style>