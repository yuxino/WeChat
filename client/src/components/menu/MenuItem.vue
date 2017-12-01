<template>
  <li class="wx-menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'Menu-Item'
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(menu-item){
    padding: 8px;
    line-height: 1.6;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid $--menu-item-border;
    &:hover{
      background: $--menu-item-hover-background;
    }
  }
</style>
