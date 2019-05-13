<template>
    <div class="wx-profile clearfix">
      <img @click.stop="showCard($event)" class="wx-profile__avatar" src="static/mine.jpg" alt="">
      <span class="wx-profile__username">Nbsaw</span>
      <i class="wx-profile__menu iconfont icon-menu"></i>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Profile',
  methods: {
    ...mapMutations(['showCard'])
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(profile){
    padding: 18px;
    @include e(avatar){
      display: inline-block;
      vertical-align: middle;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    @include e(username){
    display: inline-block;
    vertical-align: middle;
    width: 160px;
    margin-left: 5px;
    color: $--profile-username-color;
    }
    @include e(menu){
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      line-height: 30px;
      right: 0;
      text-align: center;
      font-size: 20px;
      color: $--profile-menu-color;
      cursor: pointer;
    }
  }
</style>