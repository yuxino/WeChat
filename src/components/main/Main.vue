<template>
  <keep-alive>
    <component class="wx-main" :is="viewName"></component>
  </keep-alive>
</template>

<script>
import { mapState } from 'vuex'
import ChatArea from './ChatArea'
import SubjectArea from './SubjectArea'
import ContactArea from './ContactArea'
import viewConfig from '@/config/viewConfig'

export default {
  name: 'Main',
  components: { ChatArea, SubjectArea, ContactArea },
  computed: {
    ...mapState(['currentView']),
    viewName () {
      return viewConfig[this.currentView]['main']
    }
  }
}
</script>


<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(main){
    position: relative;
    height: 100%;
    overflow: hidden;
    background: $--main-background;
  }
</style>