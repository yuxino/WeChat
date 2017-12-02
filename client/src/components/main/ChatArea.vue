<template>
  <div>
    <chat-title>{{currentChat.userName}}</chat-title>
    <div v-if="currentChatId" class="wx-chatArea-content" @contextmenu.prevent="showMenu({$event,menuName})">
      <p class="wx-chatArea-content__time">11:23</p>
      <!--遍历聊天记录
          TODO 时间算法
          TODO 缓存聊天记录
      -->
      <div v-for="(item,index) of historys" :key="index" class="wx-chatArea-message clearfix" :class="{'is-self' : item.self }">
        <img class="wx-chatArea-message__avatar" :src="item.self ? './static/mine.png' : contact[currentChatId].avatar">
        <div class="wx-chatArea-message__bubble">{{item.msg}}</div>
      </div>
    </div>
    <div v-if="currentChatId" class="wx-chatArea-messageArea">
        <div class="wx-chatArea-messageArea__bar">
          <i class="wx-chatArea-messageArea__icon iconfont icon-face"></i>
        </div>
        <div class="wx-chatArea-messageArea-text-box">
          <div class="wx-chatArea-messageArea-text-box__wrapper">
              <textarea @input="type"
                        @keydown.ctrl.enter="submit"
                        spellcheck="false">
              </textarea>
          </div>  
        </div>
        <div class="wx-chatArea-messageArea-btn-container">
          <span class="wx-chatArea-messageArea-btn-container__describe">按下Ctrl+Enter发送</span> 
          <button class="wx-chatArea-messageArea-btn-container__send" @click="submit">发送</button>
        </div>
    </div>
    <!--TODO 没有聊天记录 显示暂时没有新消息 -->
    <!--没有选择任何聊天时候的提示-->
    <div v-else class="wx-chatArea-tip-wrapper">
      <i class="wx-chatArea-tip-wrapper__icon iconfont icon-weixin"></i>
      <p class="wx-chatArea-tip-wrapper__tip">未选择聊天</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import ChatTitle from './Title'

// 缓存textarea的输入，因为是共用的textarea
let messageCache = {}

export default {
  name: 'ChatArea',
  components: { ChatTitle },
  data () {
    return {
      menuShow: false,
      menuName: 'ChatAreaMenu'
    }
  },
  computed: {
    ...mapState(['currentChatId', 'contact']),
    ...mapGetters(['currentChat', 'historys'])
  },
  watch: {
    // 监视当前聊天对象的变更
    currentChatId () {
      // 只有id不为fasly的时候执行滚动条位置修正
      if (this.currentChatId) {
        this.$nextTick(function () {
          // 修正滚动条位置
          let container = this.$el.querySelector('.wx-chatArea-content')
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
      this.$store.commit('sendMessage', messageCache[this.currentChatId])
      // 清空聊天框内容
      let textarea = this.$el.querySelector('textarea')
      textarea.value = ''
      // 清空缓存
      messageCache[this.currentChatId] = ''
      // 等待数据渲染完成后 调整滚动条
      this.$nextTick(function () {
        let container = this.$el.querySelector('.wx-chatArea-content')
        container.scrollTop = container.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(chatArea-content){
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    bottom: 190px;
    padding: 0 20px;
    overflow: auto;
    @include e(time){
      font-size: 12px;
      padding: 1px 18px;
      color: $--chatArea-content-time-color;
      text-align: center;
    }
  }

  @include b(chatArea-message){
    text-align: left;
    margin-top:  15px;
    margin-bottom: 15px;
    @include e(bubble){
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      max-width: 500px;
      min-height: 40px;
      white-space: pre-line;
      word-wrap: break-word;
      background-color: $--chatArea-message-bubble-color;
      line-height: 30px;
      padding: 5px 10px;
      text-align: left;
      font-size: 14px;
      border-radius: 3px;
      &::after{
        content: " ";
        position: absolute;
        top: 14px;
        right: 100%;
        border: 6px solid transparent;
        border-right-color: $--chatArea-message-bubble-after-border;
        border-right-width: 4px;
      }
    }
    @include e(avatar){
      width: 40px;
      height: 40px;
      float: left;
      margin-right: 15px;
      margin-left: 0;
    }
    @include when(self){
      text-align: right;
      & > img {
        float: right;
        margin-right: 0; 
        margin-left: 15px;
      }
      & > div {
        background-color: $--chatArea-message-bubble-self-color;
        &::after{
          content: " ";
          position: absolute;
          top: 14px;
          right: -10px;
          border: 6px solid transparent;
          border-left-color: $--chatArea-message-bubble-self-after-border;
          border-left-width: 4px;
        }
      }
    }
  }

  @include b(chatArea-messageArea){
    min-height: 190px;
    position: absolute;
    margin-right: 19px;
    border-top: 1px solid $--chatArea-messageArea-border;
    bottom: 0;
    left: 0;
    right: 0;
    @include e(bar){
      line-height: 30px;
      padding: 5px 17px;
    }
    @include e(icon){
      font-size: 18px;
    }
  }

  @include b(chatArea-messageArea-text-box){
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      top: 42px;
      bottom: 40px;
      @include e(wrapper){
        height: 100%;
        padding-left: 20px;
        & > textarea {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          border: 0;
          font-size: 16px;
          font-family: inherit;
          background: none;
          outline: none;
          overflow: auto;
          resize: none;
        }
      }
  }

  @include b(chatArea-messageArea-btn-container){
      line-height: 30px;
      position: absolute;
      bottom: 10px;
      text-align: right;
      left: 0;
      right: 0;
      @include e(describe){
        font-size: 12px;
        margin-left: 10px;
        margin-right: 7px;
        color: $--chatArea-messageArea-btn-container-describe-color;
      }
      @include e(send){
        padding: 3px 30px;
        display: inline-block;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        color: $--chatArea-messageArea-btn-container-send-background;
        background: $--chatArea-messageArea-btn-container-send-color;
        border: 1px solid $--chatArea-messageArea-btn-container-send-border;
      }
  }

  @include b(chatArea-tip-wrapper){
    margin-top: 120px;
    text-align: center;
    @include e(icon){
      color: $--chatArea-tip-wrapper-icon-color;
      font-size: 100px;
    }
    @include e(tip){
      color: $--chatArea-tip-wrapper-tip-color;
      margin: 0;
      margin-top: 5px;
      font-size: 13px;
    }
  }
</style>