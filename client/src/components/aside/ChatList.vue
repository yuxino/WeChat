<template>
  <div class="wx-chat">
    <div class="wx-chat-list__tips" v-if="itemsEmpty">{{tips}}</div>
    <div class="wx-chat-list__item" v-for="(item,chatId) of chatList" 
                        :key="chatId.substr(1)"
                        :class="{ 'is-active' : chatId.substr(1) === currentChatId }"
                        @contextmenu.prevent="showMenu({$event,menuName})"
                        @click="chatChange(chatId.substr(1))">
      <img class="wx-chat-list__avatar" :src="item.avatar" alt="头像">
      <div class="wx-chat-list-info">
        <span class="wx-chat-list__username">
            {{ item.remarks || item.userName }}
          <span class="wx-chat-list-info__time">
            {{ item.time }}
          </span>
        </span>
        <span class="wx-chat-list-info__lastMsg">
            {{ item.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ChatList',
  data () {
    return {
      tips: '哇呜好可怜没有人和你交流...',
      menuName: 'ChatListMenu',
      menuShow: false
    }
  },
  computed: {
    ...mapState(['currentChatId']),
    ...mapGetters(['chatList']),
    itemsEmpty () {
      return _.isEmpty(this.chatList)
    }
  },
  methods: {
    ...mapMutations(['showMenu', 'chatChange'])
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(chat-list){
    position: absolute;
    top: 149px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: auto;
    overflow-y: auto;
    
    @include e(tips){
      margin: 30px auto;
      text-align: center;
      color: $--chat-list-tips-color;
      font-size: 14px;
    }

    @include e(item){
      padding: 18px;
      height: 40px;
      overflow: hidden;
      cursor: pointer;
      &:hover{
        background: $--chat-list-item-hover-background;
        *{
          color: $--chat-list-item-hover-color;
        }
      }
      @include when(active){
        background: $--chat-list-item-active-background;
        *{
          color: $--chat-list-item-active-color;
        }
      }
    }

    @include e(avatar){
      width: 40px;
      height: 40px;
      margin-right: 10px;
      float: left;
    }
  }

  @include b(chat-list-info){
    color: $--chat-list-item-info-color;
    font-size: 13px;
    overflow: hidden;
    span{
      display: block;
      line-height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    @include e(username){
      color: $--chat-list-info-username-color;
    }

    @include e(time){
      float: right;
      color: $--chat-list-info-time-color;
    }

    @include e(lastMsg){
      font-size: 13px;
      color: $--chat-list-info-lastMsg-color;
    }
  }
</style>