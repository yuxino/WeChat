<template>
    <div class="title">
        <span class="content">
          <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
  name: 'title'
}
</script>

<style lang="sass" scoped>
  .title
    line-height: 25px
    text-align: center
    padding: 10px 0
    margin: 0 19px
    border-bottom: 1px solid #d6d6d6


  .content
    display: inline-block
    vertical-align: middle
    max-width: 300px
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    word-wrap: normal
    text-decoration: none
    color: #000
    font-weight: 400
    font-size: 14px
</style>