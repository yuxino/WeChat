<template>
  <div class="list">
    <div class="emptyPlaceHolder" v-if="itemsEmpty">{{emptyMsg}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SubjectList',
  data () {
    return {
      emptyMsg: '咦 你一个联系人都没有...',
      items: []
    }
  },
  computed: {
    ...mapState(['currentChat']),
    itemsEmpty () {
      return this.items.length === 0
    }
  }
}
</script>

<style lang="sass" scoped>
  .list
    position: absolute
    top: 152px
    bottom: 0px
    left: 0
    right: 0
    overflow: auto
    overflow-y: auto

  .emptyPlaceHolder
    margin: 30px auto
    text-align: center
    color: #6b6f7c
    font-size: 14px
</style>