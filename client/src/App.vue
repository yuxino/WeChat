<template>
    <div class="wx-app">
      <!--App Core-->
      <WxAside></WxAside>
      <WxMain></WxMain>
      <!--CopyRight-->
      <CopyRight></CopyRight>
      <!--App Menu-->
      <component :is="currentMenu"
                 v-show="menuStatus"
                 :position="position"
                 v-click-outside="_closeMenu">
      </component>
    </div>
</template>

<script>
import WxAside from '@/components/aside/Aside'
import WxMain from '@/components/main/Main'
import CopyRight from '@/components/footer/CopyRight'
import ChatListMenu from '@/components/menu/ChatListMenu'
import ChatAreaMenu from '@/components/menu/ChatAreaMenu'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {WxAside, WxMain, CopyRight, ChatListMenu, ChatAreaMenu},
  computed: {
    ...mapState(['currentMenu', 'menuStatus', 'position', 'menuStatus'])
  },
  methods: {
    ...mapMutations(['closeMenu']),
    // 防止疯狂提交commit
    _closeMenu () {
      this.menuStatus && this.$store.commit('closeMenu')
    }
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  body,html {
    height: 100%;
    font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, Arial, sans-serif;
    margin: 0;
  }

  body {
    // style loader 导入这个图片到gh-pages的时候有问题
    // 所以把图丢在了cdn上
    background: url(http://ordlnvdfx.bkt.clouddn.com/bg.jpg) no-repeat 50%;
    background-size: cover;
  }

  @include b(app){
    max-width: 1000px;
    min-width: 800px;
    height: 80%;
    min-height: 600px;
    padding-top: 100px;
    margin: 0 auto;
    transition: .2s;
  }

  ::-webkit-scrollbar{
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
    background-color: $--webkit-scrollbar-thumb-color;
  }

  ::-webkit-scrollbar-track{
    background-color: transparent;
  }

  @media (max-height: 800px) , (max-width:1000px){
    .wx-app{
      padding-top: 0;
      height: 100%;
    }
  }
</style>