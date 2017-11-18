<template>
  <div class="aside clearfix">
      <aside-header></aside-header>
      <keep-alive>
          <component :is="viewName"></component>
      </keep-alive>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import AsideHeader  from './header'
import ChatList         from './ChatList'
import SubjectList      from './SubjectList'
import ContactList      from './ContactList'
import viewConfig   from '@/config/viewConfig'

export default {
  name: 'Aside',
  components: { AsideHeader , ChatList , SubjectList , ContactList },
  computed: {
    ...mapState(['currentView']),
    viewName() {
      return viewConfig[this.currentView]['aside']
    }
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
</style>