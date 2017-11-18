<template>
    <div class="container">
      <div class="wx-app">
          <WxAside></WxAside>
          <WxMain></WxMain>
      </div>
      <CopyRight></CopyRight>
      <!--Menu ! -->
      <component :is="currentMenu" v-show="menuStatus" :position="position" v-click-outside="closeMenu"></component>
    </div>
</template>

<script>
import WxAside          from '@/components/aside/Aside'
import WxMain           from '@/components/main/Main'
import CopyRight        from '@/components/footer/CopyRight'

import ChatListMenu     from '@/components/menu/ChatListMenu'
import ChatAreaMenu     from '@/components/menu/ChatAreaMenu'

import { mapState }     from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: { WxAside , WxMain, CopyRight , ChatListMenu , ChatAreaMenu},
  computed: {
    ...mapState(['menuStatus','position','currentMenu','menuStatus','position'])
  },
  methods: {
    ...mapMutations(['closeMenu'])
  }
}
</script>

<style lang="sass">
    body,html,#app
      height: 100%
      font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, Arial, sans-serif
      background: url(/static/bg.jpg) no-repeat 50%
      margin: 0
      background-size: cover

    .container
      max-width: 1000px
      min-width: 800px
      height: 80%
      min-height: 600px
      padding-top: 100px
      margin: 0 auto
      transition: .2s

    ::-webkit-scrollbar
     width: 6px
      height: 6px

    ::-webkit-scrollbar-thumb
      border-radius: 3px
        -moz-border-radius: 3px
        -webkit-border-radius: 3px
      background-color: #6f6f6f

    ::-webkit-scrollbar-track
      background-color: transparent

    .wx-app
      height: 100%

    @media (max-height: 800px) , (max-width:1000px)
      .container
        padding-top: 0;
        height: 100%;
</style>