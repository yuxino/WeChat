<template>
  <div class="wx-card" :class="{ 'is-show' : cardStatus }"
                       :style="cardPosition"
                       v-click-outside="_closeCard">
    <img class="wx-card__avatar" src="static/mine.jpg" alt="" v-if="cardChatId == null">
    <img class="wx-card__avatar" :src="contact[cardChatId].avatar" alt="" v-else>
    <div class="wx-card-info" v-if="cardChatId == null">
      Nbsaw  <i class="iconfont wx-card-info__icon is-male icon-nanren"></i>
      <p>备注: 呵呵</p>
      <p>地区: 深圳</p>
    </div>
    <div class="wx-card-info" v-else>
      {{ contact[cardChatId].remarks || contact[cardChatId].userName }}  <i class="iconfont wx-card-info__icon is-male icon-nanren"></i>
      <p>备注: {{ contact[cardChatId].bio }} </p>
      <p>地区: {{ contact[cardChatId].location }} </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Card',
  computed: {
    ...mapState(['cardStatus', 'cardPosition', 'cardChatId', 'contact'])
  },
  methods: {
    ...mapMutations(['closeCard']),
    // 防止疯狂提交commit
    _closeCard () {
      this.cardStatus && this.$store.commit('closeCard')
    }
  }
}
</script>

<style lang='scss'>
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';
  
  $border-radius: 5px;

  @include b(card){
    position: absolute;
    top: 0px;
    left: 0px;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    box-shadow: rgba(0,0,0,.1) 0 5px 10px;
    transition: .3s;
    transform: scale(0);
    @include e(avatar){
      $size: 220px;
      width: $size;
      height: $size;
      display: block;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
    @include when(show){
      transform: scale(1) !important;
    }
  }

  @include b(card-info){
    padding: 20px;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    background: white;
    & > p{
      margin: 5px 0 0 0;
      font-size: 12px;
      color: #888888;
      width: 180px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    @include e(icon){
       font-size: 12px;
       @include when(male){
         color: $--contactArea-icon-male-color;
       }
       @include when(female){
         color: $--contactArea-icon-female-color;
       }
    }
  }
</style>

