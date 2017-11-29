<template>
  <wx-menu :position="position">
    <wx-menu-item @click.native="topChat">置顶</wx-menu-item>
    <wx-menu-item @click.native="closeChat(currentChatId)">关闭聊天</wx-menu-item>
  </wx-menu>
</template>


<!--TODO 获取到正确的id-->

<script>
import WxMenu from './Menu'
import WxMenuItem from './MenuItem'
import { mapState , mapMutations } from 'vuex'

export default {
  name: "ChatListMenu",
  components: { WxMenu , WxMenuItem },
  props: ['position'],
  computed: {
    ...mapState(['currentChatId'])
  },
  methods: {
    ...mapMutations(['closeMenu','closeChat']),
    topChat (e) {
      this.closeMenu()
    }
  }
}
</script>
