<template>
  <div class="wx-aside-tab clearfix">
    <div class="wx-aside-tab-container" v-for="({iconName,viewName},index) of views" :key="index" @click="viewChange(viewName)">          
      <i class='iconfont wx-aside-tab-container__icons':class="[iconName,{'is-active' : viewName === currentView}]"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Tab',
  data () {
    return {
      views: [
        {
          viewName: 'chat',
          iconName: 'icon-qipao'
        }, {
          viewName: 'subject',
          iconName: 'icon-wenzhang_weixuanzhong'
        }, {
          viewName: 'contact',
          iconName: 'icon-lianxiren'
        }
      ]
    }
  },
  computed: {
    ...mapState(['currentView'])
  },
  methods: {
    ...mapMutations(['viewChange'])
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(wx-aside-tab){
    overflow: hidden;
  }

  @include b(aside-tab-container){
    display: inline-block;
    width: 33%;
    padding: 8px 0;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    @include e(icons){
      width: 100%;
      display: block;
      font-size: 22px;
      @include when(active){
        color: $--aside-tab-container-icons-active;
      }
    }
  }
  
  // 每个图标之间的分割线 (但觉得写的不是很好
  .wx-aside-tab-container + .wx-aside-tab-container > .wx-aside-tab-container__icons{
    border-left: 1px solid  $--aside-tab-container__icons-border;
  }
</style>
