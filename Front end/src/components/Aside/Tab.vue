<template>
    <div class="tab">
        <div class="icon "><i class='iconfont icon-qipao icons active'></i></div>
        <div class="icon"><i class="iconfont icon-wenzhang_weixuanzhong icons"></i></div>
        <div class="icon"><i class="iconfont icon-lianxiren icons"></i></div>
    </div>
</template>


<style lang="sass" scoped>
  .tab
    padding-bottom: 6px
    border-bottom: 1px solid #24272c;
    &:after
      content: ""; 
      display: block; 
      height: 0; 
      clear: both; 
      visibility: hidden 

  .tab > div
    width: 32.3333%
    float: left
    text-align: center
    border-right: 1px solid #24272c
    color: white
    cursor: pointer

  .tab > div:last-child
    border: 0

  .tab > div > i
    font-size: 24px

  .icon
    display: inline-block
    width: 32%
    padding: 5px 0
    text-align: center
    box-sizing: border-box

  .icons.active 
    color: #3caf36

  .icons 
    font-size: 22px

  .icon + .icon
    border-left: 1px solid #24272c
    
</style>
