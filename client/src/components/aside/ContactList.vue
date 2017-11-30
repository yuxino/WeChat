<template>
  <div class="wx-contact-list">
    <div class="wx-contact-list__tips" v-if="itemsEmpty">{{emptyMsg}}</div>
    <div v-for="(contacts,group) of contactList" :key="group">
      <h4 class="wx-contact-list__group-title">{{ group }}</h4>
      <div class="wx-contact-list__item clearfix" v-for="(item,contactId) of contacts"
                                         :class="{'is-active' : contactId == currentContactId}" 
                                         @click="contactChange(contactId)"
                                         :key="contactId">
        <img class="wx-contact-list__item__avatar" :src="item.avatar">
        <div class="wx-contact-list__item__name">{{item.remarks ? item.remarks : item.userName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ContactList',
  data () {
    return {
      emptyMsg: '咦 你一个联系人都没有...'
    }
  },
  computed: {
    ...mapState(['currentContactId']),
    ...mapGetters(['contactList']),
    itemsEmpty () {
      return _.isEmpty(this.contactList)
    }
  },
  methods: {
    ...mapMutations(['contactChange'])
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(contact-list){
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
      color: $--contact-list-tips-color;
      font-size: 14px;
    }

    @include e(group-title){
      margin: 0;
      padding: 5px 18px;
      font-weight: 400;
      color: $--contact-list-group-title-color;
      background: $--contact-list-group-title-background;
      font-size: 14px;
    }

    @include e(item){
      padding: 10px 18px 9px;
      color: $--contact-list-item-color;
      cursor: pointer;
      + .wx-contact-list__item {
        border-top: 1px solid $--contact-list-item-border;
      }
      @include when(active){
        background: $--contact-list-item-active-color;
      }
    }

    @include e(item__avatar){
      width: 30px;
      height: 30px;
      float: left;
      margin-right: 7px;
    }

    @include e(item__name){
      line-height: 30px;
      font-size: 13px;
      overflow: hidden;
    }
  }
</style>