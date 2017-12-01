<template>
  <div class="wx-subject-list">
    <div class="wx-subject-list__et" v-if="isEmpty">{{emptyTips}}</div>
    <div class="wx-subject-list__item" v-for="(item,subjectId) of items"
                                       :key="subjectId"
                                       @click="subjectChange(subjectId)">
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'

export default {
  name: 'SubjectList',
  data () {
    return {
      emptyTips: '暂无文章...',
      items: []
    }
  },
  methods: {
    subjectChange (subjectId) {
      this.$store.commit('subjectChange', subjectId)
    }
  },
  computed: {
    ...mapState(['currentSubject', 'subject']),
    isEmpty () {
      return _.isEmpty(this.items)
    }
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(subject-list){
    position: absolute;
    top: 149px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: auto;
    overflow-y: auto;
    @include e(et){
      margin: 30px auto;
      text-align: center;
      color: $--subject-list-et-color;
      font-size: 14px;
    }
    @include e(item){

    }
  }
</style>