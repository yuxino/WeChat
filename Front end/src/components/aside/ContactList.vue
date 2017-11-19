<template>
  <div class="list">
    <div class="emptyPlaceHolder" v-if="itemsEmpty">{{emptyMsg}}</div>

    <div v-for="(contacts,group) of contactList" :key="group">
      <h4 class="contact-group-title">{{ group }}</h4>
      <div class="contact-item clearfix" v-for="(item,userId) of contacts" :key="userId">
        <img :src="item.avatar" class="contact-avatar">
        <div class="contact-name">{{ item.userName }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'

export default {
  name: 'SubjectList',
  data () {
    return {
      emptyMsg: '咦 你一个联系人都没有...',
      items: []
    }
  },
  computed: {
    ...mapState(['currentChat']),
    ...mapGetters(['contactList']),
    itemsEmpty () {
      return this.contactList.length === 0
    }
  }
}
</script>

<style lang="sass" scoped>
  .list
    position: absolute
    top: 152px
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

  .contact-group-title
    margin: 0
    padding: 5px 18px
    font-weight: 400
    background: #292d32
    color: #787b87
    font-size: 14px

  .contact-item
    padding: 10px 18px 9px
    color: white
  
  .contact-name
    line-height: 30px
    font-size: 13px
    overflow: hidden

  .contact-avatar
    width: 30px
    height: 30px
    float: left
    margin-right: 7px

  h3
    margin: 0
    color: white
</style>