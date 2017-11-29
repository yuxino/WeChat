<template>
    <p class="copyright">© 1998 - 2017 Tencent Inc. All Rights Reserved 帮助</p>
</template>

<script>
export default {
  name: 'CopyRight'
}
</script>


<style lang="sass" scoped>
  .copyright
      margin: 0;
      left: 0;
      right: 0;
      position: absolute;
      bottom: 30px;
      text-align: center;
      font-size: 12px;
      color: #e3e3e3;

  @media (max-height: 800px) 
      p
        display: none
</style>
