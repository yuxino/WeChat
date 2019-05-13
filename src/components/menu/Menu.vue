<template>
  <ul class="wx-menu" :style="menuPosition"
                      v-show="menuStatus"
                      :position="menuPosition"
                      v-click-outside="_closeMenu">
    <slot></slot>
  </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapState(['menuStatus', 'menuPosition', 'menuStatus'])
  },
  methods: {
    ...mapMutations(['closeMenu']),
    // 防止疯狂提交commit
    _closeMenu () {
      this.menuStatus && this.$store.commit('closeMenu')
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
