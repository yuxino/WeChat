<template>
  <div>
      <chat-title>{{ userName }}</chat-title>
      <div v-if="currentChatId" id="content" class="content" @contextmenu.prevent="showMenu({$event,menuName})">
        <p class="time">11:23</p>
        <!--遍历聊天记录
            TODO 时间算法
            TODO 缓存聊天记录
        -->
        <div v-for="(item,index) of historys" :key="index" class="message clearfix" :class="{self : item.self }">
          <img :src="item.self ? '/static/mine.png' : contact[currentChatId].avatar">
          <div class="bubble">{{item.msg}}</div>
        </div>
      </div>
      <div v-if="currentChatId" class="content-area">
          <div class="tools-bar">
              <i class="iconfont icon-face ccc"></i>
          </div>
          <div class="text-box">
              <div class="text-wrapper">
                  <textarea @input="type"
                            @keydown.ctrl.enter="submit"
                            spellcheck="false">
                  </textarea>
              </div>  
          </div>
          <div class="btn-box">
              <span class="describe">按下Ctrl+Enter发送</span> 
              <button @click="submit" class="send">发送</button>
          </div>
      </div>
      <!--TODO 如果暂时没有新消息 -->
      <!--没有选择任何聊天时候的提示-->
      <div v-else class="tip-wrapper">
        <i class="iconfont icons icon-weixin wx-icon"></i>
        <p class="tip">未选择聊天</p>
      </div>
  </div>
</template>

<script>
import { mapState , mapMutations , mapGetters } from 'vuex'
import ChatTitle from './Title'

// 缓存输入
let messageCache = {}

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
    ...mapState(['contact','currentChatId']),
    ...mapGetters(['userName','historys'])
  },
  watch: {
    // 监视当前聊天对象的变更
    currentChatId () {
      // 只有id不为fasly的时候有效
      if(this.currentChatId){
        this.$nextTick(function(){
          // 修正滚动条位置
          let container = document.querySelector("#content")
          container.scrollTop = container.scrollHeight
          // 设置 textarea 内保存过的信息
          let textarea = this.$el.querySelector('textarea')
          textarea.value = messageCache[this.currentChatId] || ''
          textarea.focus()
        })
      }
    }
  },
  methods: {
    ...mapMutations(['showMenu']),
    type (e) {
      messageCache[this.currentChatId] = e.target.value
    },
    submit (e) {
      // 更新缓存
      this.$store.commit('sendMessage',messageCache[this.currentChatId])
      messageCache[this.currentChatId] = ''
      let textarea = this.$el.querySelector('textarea')
      textarea.value = ''

      // 等待数据渲染完成后 调整滚动条
      this.$nextTick(function(){
        let container = document.querySelector("#content")
        container.scrollTop = container.scrollHeight
      })
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
    top: 52px
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
    text-align: left
    margin-top:  15px
    margin-bottom: 15px

  .message > div
    position: relative
    display: inline-block
    box-sizing: border-box
    max-width: 500px
    min-height: 40px
    white-space: pre-line
    word-wrap: break-word
    background-color: white
    color: black

  .message > div:after
    content: " "
    position: absolute
    top: 14px
    right: 100%
    border: 6px solid transparent
    border-right-color: white
    border-right-width: 4px

  .message > img
    width: 40px
    height: 40px
    float: left
    margin-right: 15px
    margin-left: 0

  .self
    text-align: right

  .self > img
    float: right
    margin-right: 0 
    margin-left: 15px

  .self > div
    background-color: #b2e281

  .self > div:after
    content: " "
    position: absolute
    top: 14px
    right: -10px
    border: 6px solid transparent
    border-left-color: #b2e281
    border-left-width: 4px

  .bubble
    line-height: 30px
    padding: 5px 10px
    text-align: left
    font-size: 14px
    border-radius: 3px

  .tip-wrapper
    margin-top: 120px
    text-align: center

  .wx-icon
    color: #e2e2e2
    font-size: 100px

  .tip
    color: #ccc
    margin: 0
    margin-top: 5px
    font-size: 13px
</style>