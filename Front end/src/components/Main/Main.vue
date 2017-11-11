<template>
  <div class="main">
     <MainTitle></MainTitle>
     <MainContent></MainContent>
     <MainText></MainText>
  </div>
</template>


<script>
import MainTitle   from './Title'
import MainContent from './Content' 
import MainText    from './Text'

export default {
  name: 'Main',
  components: { MainTitle , MainContent , MainText }
}
</script>


<style lang="sass" scoped>
  .main
    position: relative
    height: 100%
    overflow: hidden
    background-color: #eee
</style>