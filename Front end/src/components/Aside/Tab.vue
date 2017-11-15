<template>
    <div class="tab">
        <div class="icon" v-for="({iconName,viewName},index) of views" :key="index" @click="viewChange(viewName)">          
          <i class='iconfont icons':class="[iconName,{active : viewName === currentView}]"></i>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'Tab',
  computed: {
    ...mapState(['views','currentView'])
  },
  methods: {
    ...mapMutations(['viewChange'])
  }
}
</script>


<style lang="sass" scoped>
  .tab
    padding-bottom: 3px
    border-bottom: 1px solid #24272c
    overflow: hidden
    &:after
      content: ""
      display: block
      height: 0;
      clear: both
      visibility: hidden 

  .tab > div
    width: 33.3333%
    float: left
    text-align: center
    color: white
    cursor: pointer

  .tab > div > i
    font-size: 24px

  .icon
    display: inline-block
    width: 33%
    padding: 5px 0
    text-align: center
    box-sizing: border-box

  .icons.active 
    color: #3caf36

  .icons
    width: 100%
    display: block
    font-size: 22px

  .icon + .icon > .icons
    border-left: 1px solid #24272c
</style>
