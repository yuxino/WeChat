<template>
  <div class="wx-subject-list">
    <div class="wx-subject-list__et" v-if="itemsEmpty">{{emptyMsg}}</div>
    <div class="wx-subject-list__item" v-for="(item,index) of items" :key="index" @click="subjectChange(index)">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SubjectList',
  data () {
    return {
      emptyMsg: '暂无文章...',
      items: []
    }
  },
  methods: {
    subjectChange (index) {
      this.$store.commit('subjectChange', index)
    }
  },
  computed: {
    ...mapState(['currentSubject', 'subject']),
    itemsEmpty () {
      return this.items.length === 0
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