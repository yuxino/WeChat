<template>
  <div class="wx-search" v-click-outside="closeSearch">
    <i class="iconfont icon-sousuo wx-search__icon"></i>
    <input type="text" class="wx-search__input"
                       placeholder="搜索"
                       spellcheck="false"
                       @input="search"
                       @blur="closeSearch">
    <div class="wx-search-container" v-show="show">
      <div v-if="isEmpty" class="wx-search-container__et">找不到匹配的结果</div>
      <div v-else class="wx-search-result">
        <div class="wx-search-result__tips">
          好友
        </div>
        <div class="wx-search-result-item clearfix"
             v-for="(item,contactId,index) of result"
             :class="{'is-first': index === 0}"
             :key="contactId"
             @click="_newChat(contactId)">
          <img class="wx-search-result-item__avatar" :src="item.avatar">
          <div class="wx-search-result-item__username">{{item.remarks || item.userName}}</div>
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
  name: 'Search',
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
    closeSearch () {
      this.show = false
    },
    search: _.debounce(function (e) {
      this.keyword = e.target.value
    }, 200)
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(search){
    position: relative;
    box-sizing: border-box;
    line-height: 32px;
    width: 100%;
    padding: 0 18px;
    @include e(icon){
      position: absolute;
      left: 24px;
      top: 1.3px;
      font-size: 19px;
      bottom: 0;
      color: $--search-icon-color;
    }
    @include e(input){
      box-sizing: border-box;
      width: 100%;
      line-height: 32px;
      padding-left: 30px;
      border: 0;
      border-radius: 2px;
      outline: none;
      color: $--search-input-color;
      background: $--search-input-background;
    }
  }

  @include b(search-container){
    position: absolute;
    z-index: 99;
    top: 41px;
    left: 18px;
    right: 18px;
    background: $--search-container-background;
    box-shadow: 0 0 10px $--search-container-box-shadow;
    border-radius: 2px;
    @include e(et){ // empty tips
      padding: 0px 9px;
      font-weight: 400;
      color: $--search-container-et-color;
      background: $--search-container-et-background;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }

  @include b(search-result){
    max-height: 420px;
    overflow: auto;
    @include e(tips){
      padding: 0px 9px;
      font-size: 14px;
      color: $--search-result-color;
      background: $--search-result-background;
    }
  }
  
  @include b(search-result-item){
    line-height: 30px;
    padding: 10px 9px;
    cursor: pointer;
    border-bottom: 1px solid $--search-result-item-border;
    background: $--search-result-item-background;
    @include when(first) {
      background: $--search-result-item-first-background;
    }
    @include e(avatar){
      display: block;
      float: left;
      width: 30px;
      height: 30px;
      margin-right: 15px;
      border-radius: 2px;
    }
    @include e(username){
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>