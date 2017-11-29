<template>
  <ul class="menu" :style="position">
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

<style lang="sass" scoped>
  .menu
    display: inline-block
    position: absolute
    min-width: 125px
    padding: 0
    margin: 0
    list-style: none
    background: white
    border: 1px solid #d6d6d6
    border-radius: 4px
    box-shadow: 2px 3px 10px rgba(0,0,0,.1)
</style>
