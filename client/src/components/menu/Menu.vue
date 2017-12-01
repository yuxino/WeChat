<template>
  <ul class="wx-menu" :style="position">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    position: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(menu){
    display: inline-block;
    position: absolute;
    min-width: 125px;
    padding: 0;
    margin: 0;
    list-style: none;
    border-radius: 4px;
    border: 1px solid $--menu-border;
    background: $--menu-background;
    box-shadow: 2px 3px 10px $--menu-box-shadow;
  }
</style>
