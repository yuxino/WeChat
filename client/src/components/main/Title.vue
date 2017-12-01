<template>
  <div class="wx-main-title">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'title'
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(main-title){
    line-height: 30px;
    text-align: center;
    padding: 10px 0;
    margin: 0 19px;
    border-bottom: 1px solid $--main-title-border;
    & > span {
      display: inline-block;
      vertical-align: middle;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      text-decoration: none;
      color: $--main-title-color;
      font-weight: 400;
      font-size: 14px;
    }
  }
</style>