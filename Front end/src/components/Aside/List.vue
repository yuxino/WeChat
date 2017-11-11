<template>
  <div class="list">
    <div class="items active">
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
    </div>
  </div>
</template>


<script>
export default {
  name: 'List'
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