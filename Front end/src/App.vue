<template>
    <div class="container">
        <div class="wx-app">
            <wx-aside></wx-aside>
            <wx-main></wx-main>
        </div>
        <copy-right></copy-right>
    </div>
</template>

<script>
import WxAside   from '@/components/Aside/Aside'
import WxMain    from '@/components/Main/Main'
import CopyRight from '@/components/CopyRight'

export default {
  name: 'App',
  components: { WxAside , WxMain, CopyRight }
}
</script>

<style lang="sass">
    body,html,#app
      height: 100%
      font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, Arial, sans-serif
      background: url(/static/bg.jpg) no-repeat 50%
      margin: 0
      background-size: cover

    .container
      max-width: 1000px
      min-width: 800px
      height: 80%
      min-height: 600px
      padding-top: 100px
      margin: 0 auto

    .wx-app
      height: 100%
</style>