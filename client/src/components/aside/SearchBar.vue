<template>
  <div class="search-bar" v-click-outside="closeSearch">
      <i class="iconfont icon-sousuo search-icon"></i>
      <input type="text" class="search-input" placeholder="搜索" spellcheck="false" @input="search" blur="closeSearch">
      <div class="search-container" v-show="show">
        <div v-if="isEmpty" class="emptyMsg">找不到匹配的结果</div>
        <div v-else class="result-container">
          <div class="tip">
            好友
          </div>
          <div class="item clearfix"
               v-for="(item,contactId) of result"
               :key="contactId"
               @click="_newChat(contactId)">
            <img class="avatar" :src="item.avatar">
            <div class="username">{{ item.remarks || item.userName  }}</div>
          </div>
          </div>
      </div>
  </div>
</template>


<script>
import _ from 'lodash'
import pyfl from '@/libs/pyfl'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SearchBar',
  data () {
    return {
      show: false,
      keyword: ''
    }
  },
  computed: {
    ...mapState(['contact']),
    isEmpty: ({result}) => _.isEmpty(result),
    result () {
      let keyword = _.trim(this.keyword)
      if (_.isEmpty(keyword)) {
        this.show = false
        return
      }
      this.show = true
      let py = pyfl(keyword)
      const regex = new RegExp(py, 'i')
      // 查询出对应的联系人信息
      let results = {}
      _.filter(this.contact, ({remarks, userName}, contactId) => {
        let valid = regex.test(pyfl(remarks || userName))
        valid && (results[contactId] = this.contact[contactId])
        return valid
      })
      return results
    }
  },
  methods: {
    ...mapMutations(['newChat']),
    _newChat (contactId) {
      this.newChat(contactId)
      this.closeSearch()
    },
    closeSearch: function () { this.show = false },
    search: _.debounce(function (e) {
      this.keyword = e.target.value
    }, 200)
  }
}
</script>

<style lang="sass" scoped>
    .search-bar
      position: relative
      box-sizing: border-box
      line-height: 32px
      width: 100%
      padding: 0 18px

    .search-icon
      position: absolute
      left: 24px
      top: 1.3px
      font-size: 19px
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
      background-color: #393c43
      border-bottom-left-radius: 2px
      border-bottom-right-radius: 2px

    .tip
      padding: 0px 9px
      font-size: 14px
      color: #787b87
      background-color: #393c43

    .result-container
      max-height: 420px
      overflow: auto

    .item
      line-height: 30px
      padding: 10px 9px
      cursor: pointer
      border-bottom: 1px solid #33363b;
      background-color: #393c43

    .active
      background: #595b64

    .avatar
      display: block
      float: left
      width: 30px
      height: 30px
      margin-right: 15px
      border-radius: 2px

    .username
      overflow: hidden
      text-overflow: ellipsis
</style>