<template>
  <div class="list">
    <div class="emptyPlaceHolder" v-if="itemsEmpty">{{emptyMsg}}</div>
    <div class="items" v-for="(item,index) of items" :key="index" @click="subjectChange(index)">
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
    subjectChange(index) {
      this.$store.commit('subjectChange',index)
    }
  },
  computed: {
    ...mapState(['currentSubject','subject']),
    itemsEmpty () {
      return this.items.length === 0
    }
  }
}
</script>

<style lang="sass" scoped>
  .emptyPlaceHolder
    margin: 30px auto
    text-align: center
    color: #6b6f7c
    font-size: 14px
</style>