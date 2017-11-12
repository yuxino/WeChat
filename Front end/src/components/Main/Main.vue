<template>
  <keep-alive class="main" :is="currentView"></keep-alive>
</template>


<script>
import { mapState } from 'vuex'
import Chat         from './chat'
import Subject      from './subject'
import Contact      from './contact'

export default {
  name: 'Main',
  computed: {
    ...mapState(['views','currentView'])
  },
  components: { Chat , Subject , Contact }
}
</script>


<style lang="sass" scoped>
  .main
    position: relative
    height: 100%
    overflow: hidden
    background-color: #eee
</style>