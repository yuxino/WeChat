<template>
  <div class="list">
    <div class="emptyPlaceHolder" v-if="itemsEmpty">{{emptyMsg}}</div>
    <div class="items" v-for="(item,index) of items" :key="index" :class="{ active : index === currentChat }" @click="chatChange(index)">
      <img class="avatar" :src="item.avatar" alt="头像">
      <div class="wrapper">
        <span class="username">
          {{ item.userName }}
          <span class="time">
            {{ item.time }}
          </span>
        </span>
        <span class="last-message">
          {{ item.lastMsg }}
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'ChatList',
  emptyMsg: '哇呜好可怜这个人没有和任何人交流过...',
  data () {
    return {
      items: new Array(4).fill({
        userName: 'Ass We Can',
        avatar: "/static/avatar.jpg",
        time: "03:15",
        lastMsg: '我的屁股是真的大'
      })
    }
  },
  methods: {
    chatChange(index) {
      this.$store.commit('chatChange',index)
    }
  },
  computed: {
    ...mapState(['currentChat']),
    itemsEmpty () {
      return this.items.length === 0
    }
  }
}
</script>

<style lang="sass" scoped>
  .list
    position: absolute
    top: 151px
    bottom: 0px
    left: 0
    right: 0
    overflow: auto

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