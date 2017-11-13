<template>
  <div class="aside clearfix">
      <Aside-Header></Aside-Header>
      <keep-alive :is="currentView"></keep-alive>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import AsideHeader  from './header'
import Chat         from './chat'
import Subject      from './subject'
import Contact      from './contact'

export default {
  name: 'Aside',
  components: { AsideHeader , Chat , Subject , Contact },
  computed: {
    ...mapState(['currentView'])
  },
}
</script>


<style lang="sass" scoped>
    .aside
        float: left
        position: relative
        width: 260px
        height: 100%
        background-color: #2e3238
        overflow: auto
</style>