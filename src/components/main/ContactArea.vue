<template>
  <div>
    <contact-title>详细信息</contact-title>
    <div v-if="currentContact" class="wx-contactArea">
      <img class="wx-contactArea__avatar" :src="currentContact.avatar" alt="">
      <div>
        <h4 class="wx-contactArea__username">{{ currentContact.userName }}</h4>
        <i class="iconfont wx-contactArea__icon" :class="[currentContact.sex === 'male' ? 'icon-nanren is-male' : 'icon-nvrentouxiang is-female']"></i>
      </div>
      <p v-if="currentContact.bio" class="wx-contactArea__bio">{{ currentContact.bio }}</p>
      <div class="wx-contactArea__another-info">
        <p v-if="currentContact.remarks"><label>备注 :   </label>{{ currentContact.remarks }}</p>
        <p v-if="currentContact.location"><label>地区 :   </label>{{ currentContact.location }}</p>
      </div>
      <button class="wx-contactArea__newChat-btn" @click="newChat(currentContactId)">发消息</button>
    </div>
    <div v-else class="wx-contactArea-tip-wrapper">
      <i class="iconfont icons icon-yonghurenxiang wx-contactArea-tip-wrapper__icon"></i>
    </div>
  </div>
</template>

<script>
import ContactTitle from './Title'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ContactArea',
  components: { ContactTitle },
  computed: {
    ...mapState(['currentContactId']),
    ...mapGetters(['currentContact'])
  },
  methods: {
    ...mapMutations(['newChat'])
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(contactArea){
    padding: 80px 0;
    text-align: center;
    @include e(avatar){
      width: 100px;
      height: 100px;
      margin-bottom: 22px;
      border-radius: 4px;
    }
    @include e(username){
      display: inline-block;
      margin: 0;
      font-weight: 400;
      font-size: 24px;
    }
    @include e(icon){
       font-size: 12px;
       @include when(male){
         color: $--contactArea-icon-male-color;
       }
       @include when(female){
         color: $--contactArea-icon-female-color;
       }
    }
    @include e(bio){
      margin: 0;
      margin-top: 10px;
      font-size: 14px;
      color: $--contactArea-bio-color;
    }
    @include e(another-info){
      margin: 35px;
      color: $--contactArea-another-info-color;
      & > p{
        margin: 0;
        line-height: 1.6;
        font-size: 12px;
        & > label{
          white-space: pre-wrap
        }
      }
    }
    @include e(newChat-btn){
      display: inline-block;
      width: 200px;
      line-height: 40px;
      font-size: 14px;
      border: 0;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      text-align: center;
      color: $--contactArea-newChat-btn-color;
      background: $--contactArea-newChat-btn-background;
    }
  }
  
  @include b(contactArea-tip-wrapper){
    text-align: center;
    margin-top: 50px;
    @include e(icon){
      display: inline-block;
      color: $--contactArea-tip-wrapper-color;
      padding: 20px;
      font-size: 100px;
      background: $--contactArea-tip-wrapper-background;
    }
  }
</style>