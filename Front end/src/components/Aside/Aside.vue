<template>
  <div class="aside clearfix">
      <Aside-Header></Aside-Header>
      <Aside-List emptyMsg="哇呜好可怜这个人没有任何联系人.." :items="items"></Aside-List>
  </div>
</template>


<script>
import AsideHeader from './header'
import AsideList   from './List'

export default {
  name: 'Aside',
  components: { AsideHeader , AsideList },
  data () {
    return {
      items: new Array(10).fill({
        userName: 'Ass We Can',
        avatar: "/static/avatar.jpg",
        time: "03:15",
        lastMsg: '我的屁股是真的大'
      })
    }
  }
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