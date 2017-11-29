<template>
  <div class="list">
    <div class="emptyPlaceHolder" v-if="itemsEmpty">{{emptyMsg}}</div>
    <div v-for="(contacts,group) of contactList" :key="group">
      <h4 class="contact-group-title">{{ group }}</h4>
      <div class="contact-item clearfix" v-for="(item,contactId) of contacts"
                                         :class="{active : contactId == currentContactId}" 
                                         @click="contactChange(contactId)"
                                         :key="contactId">
        <img :src="item.avatar" class="contact-avatar">
        <div class="contact-name">{{ item.remarks ? item.remarks : item.userName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ContactList',
  data () {
    return {
      emptyMsg: '咦 你一个联系人都没有...',
      items: []
    }
  },
  methods: {
    ...mapMutations(['contactChange'])
  },
  computed: {
    ...mapState(['currentContactId']),
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
    cursor: pointer

  .contact-item + .contact-item
    border-top: 1px solid #292c33
  
  .contact-name
    line-height: 30px
    font-size: 13px
    overflow: hidden

  .contact-avatar
    width: 30px
    height: 30px
    float: left
    margin-right: 7px

  .active
    background: #3b4047
</style>