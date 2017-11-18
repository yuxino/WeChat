<template>
  <wx-menu :position="position">
    <wx-menu-item @click.native="clearChat">清屏</wx-menu-item>
  </wx-menu>
</template>

<script>
import WxMenu from './Menu'
import WxMenuItem from './MenuItem'
import { mapMutations } from 'vuex'

export default {
  name: "ChatAreaMenu",
  components: { WxMenu , WxMenuItem },
  props: ['position'],
  methods: {
    ...mapMutations(['closeMenu']),
    clearChat () {
      console.log('clear chat')
      this.closeMenu()
    }
  }
}
</script>
