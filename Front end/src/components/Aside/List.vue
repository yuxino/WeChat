<template>
  <div class="list">
    <div class="emptyPlaceHolder" v-if="itemsEmpty">{{emptyMsg}}</div>
    <div class="items" v-for="(item,index) of items" :key="index">
      <img class="avatar" :src="item.avatar" alt="">
      <div class="wrapper">
        <span class="username">
          {{ item.userName }}
          <span class="time">
            {{ item.time }}
          </span>
        </span>
        <span class="last-message">
          {{ item.lastMsg }}
        </span>
      </div>
    </div>
    <!-- <div class="items active">
      <img class="avatar" src="/static/avatar.jpg" alt="">
      <div class="wrapper">
        <span class="username">
          Nbsaw
          <span class="time">11:00</span>
        </span>
        <span class="last-message">asdasd</span>
      </div>
    </div>

    <div class="items">
      <img class="avatar" src="/static/avatar.jpg" alt="">
      <div class="wrapper">
        <span class="username">
          Nbsaw
          <span class="time">11:00</span>
        </span>
        <span class="last-message">asdasd</span>
      </div>
    </div> -->
  </div>
</template>


<script>
export default {
  name: 'List',
  props: ['items','emptyMsg'],
  computed: {
    itemsEmpty () {
      console.log(this.items.length === 0)
      return this.items.length === 0
    }
  }
}
</script>


<style lang="sass" scoped>
  .list
    position: absolute
    top: 151px
    bottom: 0px
    left: 0
    right: 0
    overflow: auto

  .emptyPlaceHolder
    margin: 30px auto
    text-align: center
    color: #6b6f7c
    font-size: 14px

  .items
    padding: 15px
    height: 40px
    overflow: hidden

  .items.active 
    background: #3a3f45
    *
      color: white

  .avatar
    width: 40px
    height: 40px
    margin-right: 10px
    float: left

  .wrapper
    overflow: hidden
    span
      display: block
      line-height: 20px

  .username
    font-weight: 400
    font-size: 13px
    color: white

  .time
    float: right
    color: #6b6f7c

  .last-message
    color: #989898
    font-size: 13px
</style>