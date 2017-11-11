<template>
  <div class="aside clearfix">
      <Aside-Header></Aside-Header>
      <Aside-List></Aside-List>
  </div>
</template>


<script>
import AsideHeader from './header'
import AsideList   from './List'

export default {
  name: 'Aside',
  components: { AsideHeader , AsideList }
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