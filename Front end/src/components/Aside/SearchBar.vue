<template>
  <div class="search-bar">
      <i class="iconfont icon-sousuo search-icon"></i>
      <input type="text" class="search-input" placeholder="搜索">
  </div>
</template>


<script>
export default {
  name: 'SearchBar'
}
</script>


<style lang="sass" scoped>
    .search-bar
      position: relative
      box-sizing: border-box
      line-height: 34px
      width: 100%
      padding: 0 18px


    .search-icon
      position: absolute
      left: 25px
      top: 1.2px
      bottom: 0
      color: #808285

    .search-input
      box-sizing: border-box
      width: 100%
      line-height: 32px
      padding-left: 30px
      border: 0
      border-radius: 2px
      outline: none
      background-color: #26292e
      color: #fff

</style>