<template>
  <wx-menu :position="position">
    <wx-menu-item @click.native="clearHistory(currentChatId)">清屏</wx-menu-item>
  </wx-menu>
</template>

<script>
import WxMenu from './Menu'
import WxMenuItem from './MenuItem'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ChatAreaMenu',
  components: { WxMenu, WxMenuItem },
  props: ['position'],
  computed: {
    ...mapState(['currentChatId'])
  },
  methods: {
    ...mapMutations(['clearHistory'])
  }
}
</script>
