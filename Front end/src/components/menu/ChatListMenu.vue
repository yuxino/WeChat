<template>
  <wx-menu :position="position">
    <wx-menu-item @click.native="topChat">置顶</wx-menu-item>
    <wx-menu-item @click.native="closeChat">关闭聊天</wx-menu-item>
  </wx-menu>
</template>

<script>
import WxMenu from './Menu'
import WxMenuItem from './MenuItem'
import { mapMutations } from 'vuex'

export default {
  name: "ChatListMenu",
  components: { WxMenu , WxMenuItem },
  props: ['position'],
  methods: {
    ...mapMutations(['closeMenu']),
    topChat () {
      console.log('top')
      this.closeMenu()
    },
    closeChat () {
      console.log('close')
      this.closeMenu()
    }
  }
}
</script>
