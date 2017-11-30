<template>
  <div class="wx-aside-header">
    <profile></profile>
    <search></search>
    <tab></tab>
  </div>
</template>

<script>
import Profile from './Profile'
import Search from './Search'
import Tab from './Tab'
export default {
  name: 'Header',
  components: { Profile, Tab, Search }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(aside-header){
    color: $--aside-header-color;
    border-bottom: 1px solid $--aside-header-border;
  }
</style>
