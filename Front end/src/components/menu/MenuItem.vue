<template>
  <li class="menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'Menu-Item'
}
</script>

<style lang="sass" scoped>
  .menu-item
      padding: 8px
      line-height: 1.6
      font-size: 14px
      cursor: pointer
      border-bottom: 1px solid #f1f1f1
      &:hover
          background-color: #f5f5f5
</style>
