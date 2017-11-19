<template>
  <div>
    <contact-title>详细信息</contact-title>
    <div v-if="currentContact" class="contact-container">
      <img class="contact-avatar" :src="currentContact.avatar" alt="">
      <div><h4 class="contact-userName">{{ currentContact.userName }}</h4></div>
      <p v-if="currentContact.bio" class="contact-bio">{{ currentContact.bio }}</p>
      <div class="contact-another-info-container">
        <p><label>备注 :   </label>尻</p>
        <p><label>地区 :   </label>Latin</p>
      </div>
      <button class="contact-send-btn" @click="newChat">发消息</button>
    </div>
    <div v-else class="contact-tip-wrapper">
      <i class="iconfont icons icon-yonghurenxiang contact-tip-icon"></i>
    </div>
  </div>
</template>


<script>
import ContactTitle from './Title'
import { mapGetters } from 'vuex'

export default {
  name: 'ContactArea',
  components: { ContactTitle },
  computed: {
    ...mapGetters(['currentContact'])
  },
  methods: {
    // TODO 发起一个新会话
    newChat () {

    }
  }
}
</script>

<style lang="sass" scoped>
  .contact-container
    padding: 80px 0
    text-align: center

  .contact-avatar
    width: 100px
    height: 100px
    margin-bottom: 22px
    border-radius: 4px

  .contact-userName
    margin: 0
    font-weight: 400
    font-size: 24px

  .contact-bio
    margin: 0
    margin-top: 10px
    font-size: 14px
    color: #888

  .contact-another-info-container
    margin: 35px
    color: #888
    & > p
      margin: 0
      line-height: 1.6
      font-size: 12px
      & > label
        white-space: pre-wrap

  .contact-send-btn
    display: inline-block
    width: 200px
    line-height: 40px
    font-size: 14px
    border: 0
    border-radius: 4px
    outline: none
    cursor: pointer
    text-align: center
    color: #fff
    background-color: #42ac3e

  .contact-tip-wrapper
    text-align: center
    margin-top: 50px

  .contact-tip-icon
    display: inline-block
    color: #f0f0f0
    padding: 20px
    font-size: 100px
    background: #e0e0e0
</style>