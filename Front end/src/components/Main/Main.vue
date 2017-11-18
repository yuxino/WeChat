<template>
  <keep-alive>
    <component class="main" :is="viewName"></component>
  </keep-alive>
</template>

<script>
import { mapState } from 'vuex'
import ChatArea         from './ChatArea'
import SubjectArea      from './SubjectArea'
import ContactArea      from './ContactArea'
import viewConfig   from '@/config/viewConfig'

export default {
  name: 'Main',
  computed: {
    ...mapState(['currentView']),
    viewName() {
      return viewConfig[this.currentView]['main']
    }
  },
  components: { ChatArea , SubjectArea , ContactArea }
}
</script>


<style lang="sass" scoped>
  .main
    position: relative
    height: 100%
    overflow: hidden
    background-color: #eee
</style>