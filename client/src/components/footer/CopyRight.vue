<template>
    <p class="wx-copyright">© 1998 - 2017 Tencent Inc. All Rights Reserved 帮助</p>
</template>

<script>
export default {
  name: 'CopyRight'
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(copyright){
    margin: 0;
    left: 0;
    right: 0;
    position: absolute;
    bottom: 30px;
    text-align: center;
    font-size: 12px;
    color: $--copyright-color;
  }

  @media (max-height: 800px){
    .wx-copyright {
     display: none
    }
  }
</style>
