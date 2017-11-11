<template>
  <div class="header">
      <MyInfo></MyInfo>
      <SearchBar></SearchBar>
      <Tab></Tab>
  </div>
</template>

<script>
import MyInfo    from './MyInfo'
import SearchBar from './SearchBar'
import Tab       from './Tab'

export default {
  name: "Header",
  components: { MyInfo , Tab , SearchBar }
}
</script>

<style lang="sass" scoped>
    .header 
        color: white
        border-bottom: 1px solid #24272c
</style>
