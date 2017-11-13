<template>
  <div class="search-bar">
      <i class="iconfont icon-sousuo search-icon"></i>
      <input type="text" class="search-input" placeholder="搜索" spellcheck="false" @input="search">
      <div class="search-container" v-show="active" v-click-outside="hide">
        <div v-if="isEmpty" class="emptyMsg">找不到匹配的结果</div>
        <p v-for="(item,index) of result" :key="index">
          {{ item }}
        </p>
      </div>
  </div>
</template>


<script>
import _ from 'lodash'

export default {
  name: 'SearchBar',
  data() {
    return {
      active: false,
      keyword: ''
    }
  },
  computed: {
    isEmpty: ({result}) => _.isEmpty(result),
    result () {
      let keyword = _.trim(this.keyword)
      if(_.isEmpty(keyword)) { this.active = false ; return }
      this.active = true
      if(keyword === 'a') return []
      return [keyword]
    }
  },
  methods: {
    hide: function(){ this.active = false },
    search: _.debounce(function(e) { this.keyword = e.target.value },200)
  }
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

    .search-container
      position: absolute
      z-index: 9999
      top: 41px
      left: 18px
      right: 18px
      background: #2e3238
      box-shadow: 0 0 10px #2a2a2a
      border-radius: 2px

    .emptyMsg
      padding: 0px 9px
      font-weight: 400
      color: #787b87
      margin-top: 10px
      background-color: #393c43
      border-bottom-left-radius: 2px
      border-bottom-right-radius: 2px
</style>