<template>
    <div class="myInfo clearfix">
      <img class="avatar" src="/static/mine.png" alt="">
      <span class="username">Nbsaw</span>
      <i class="menu iconfont icon-menu"></i>
    </div>
</template>

<script>
export default {
  name: 'MyInfo'
}
</script>


<style lang="sass" scoped>
    .myInfo
        padding: 18px

    .avatar
      display: inline-block
      vertical-align: middle
      width: 40px
      height: 40px

    .username
      display: inline-block
      vertical-align: middle
      width: 160px;
      margin-left: 5px;
      color: white

    .menu
      display: inline-block
      vertical-align: middle
      width: 30px
      line-height: 30px
      right: 0
      text-align: center
      font-size: 20px
      color: #777777
      cursor: pointer

</style>