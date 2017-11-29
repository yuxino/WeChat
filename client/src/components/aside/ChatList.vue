<template>
  <div class="list">
    <div class="emptyPlaceHolder" v-if="itemsEmpty">{{emptyMsg}}</div>
    <div class="items" v-for="(item,chatId) of chatList" 
                        :key="chatId.substr(1)"
                        :class="{ active : chatId.substr(1) === currentChatId }"
                        @contextmenu.prevent="showMenu({$event,menuName})"
                        @click="chatChange(chatId.substr(1))">
      <img class="avatar" :src="item.avatar" alt="头像">
      <div class="wrapper">
        <span class="username">
            {{ item.remarks || item.userName }}
          <span class="time">
            {{ item.time }}
          </span>
        </span>
        <span class="last-message">
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
      menuName: 'ChatListMenu',
      emptyMsg: '哇呜好可怜没有人和你交流...',
      menuShow: false
    }
  },
  methods: {
    ...mapMutations(['showMenu', 'closeMenu', 'chatChange'])
  },
  computed: {
    ...mapGetters(['chatList']),
    ...mapState(['currentChatId']),
    itemsEmpty () {
      return _.isEmpty(this.chatList)
    }
  }
}
</script>

<style lang="sass" scoped>
  .list
    position: absolute
    top: 149px
    bottom: 0px
    left: 0
    right: 0
    overflow: auto
    overflow-y: auto

  .emptyPlaceHolder
    margin: 30px auto
    text-align: center
    color: #6b6f7c
    font-size: 14px

  .items
    padding: 18px
    height: 40px
    overflow: hidden
    cursor: pointer
    &:hover
      background: #3a3f45
      *
      color: white

  .items.active 
    background: #3a3f45
    *
      color: white

  .avatar
    width: 40px
    height: 40px
    margin-right: 10px
    float: left

  .wrapper
    overflow: hidden
    span
      display: block
      line-height: 20px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis

  .username
    font-weight: 400
    font-size: 13px
    color: white

  .time
    float: right
    color: #6b6f7c

  .last-message
    color: #989898
    font-size: 13px
</style>