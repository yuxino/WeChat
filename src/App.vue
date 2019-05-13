<template>
  <div class='wx-app'>
    <!--App Core-->
    <WxAside></WxAside>
    <WxMain></WxMain>
    <!--CopyRight-->
    <CopyRight></CopyRight>
    <!--App Menu-->
    <component :is='currentMenu'></component>
    <Card></Card>
  </div>
</template>

<script>
import WxAside from '@/components/aside/Aside'
import WxMain from '@/components/main/Main'
import CopyRight from '@/components/footer/CopyRight'
import ChatListMenu from '@/components/menu/ChatListMenu'
import ChatAreaMenu from '@/components/menu/ChatAreaMenu'
import Card from '@/components/card/Card'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { WxAside, WxMain, CopyRight, ChatListMenu, ChatAreaMenu, Card },
  computed: {
    ...mapState(['currentMenu'])
  }
}
</script>

<style lang='scss'>
@import '~@/sass/mixin/bem';
@import '~@/sass/common/var';

body,
html {
  height: 100%;
  font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei,
    \\5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  margin: 0;
}

body {
  background: url(~/static/bg.jpg) no-repeat 50%;
  background-size: cover;
}

@include b(app) {
  max-width: 1000px;
  min-width: 800px;
  height: 80%;
  min-height: 600px;
  padding-top: 100px;
  margin: 0 auto;
  transition: 0.2s;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: $--webkit-scrollbar-thumb-color;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

@media (max-height: 800px), (max-width: 1000px) {
  .wx-app {
    padding-top: 0;
    height: 100%;
  }
}
</style>