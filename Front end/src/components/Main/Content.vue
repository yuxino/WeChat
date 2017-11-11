<template>
  <div class="content">
    <p class="time">11:20</p>
    <div class="message">
      <div>
        <div class="bubble">asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
      </div>
      <img src="/static/avatar.jpg" alt=""/>
    </div>
    <div class="message self">
      <div>
        <div class="bubble">asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
      </div>
      <img src="/static/avatar.jpg" alt="" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'Content'
}
</script>


<style lang="sass" scoped>
  .content
    position: absolute
    top: 44px
    left: 0
    right: 0
    bottom: 200px
    padding: 0 20px
    overflow: auto


  .time
    font-size: 12px
    padding: 1px 18px
    color: #b2b2b2
    text-align: center

  .message
    text-align: right
    margin-bottom: 15px

  .message > div
    position: relative
    max-width: 500px
    background-color: #b2e281
    color: black
    display: inline-block
    word-wrap: break-word

  .message > div:after
    position: absolute
    top: 14px
    border: 6px solid transparent
    content: " "
    border-left-color: #b2e281
    border-left-width: 4px

  .bubble
    padding: 5px 10px
    text-align: left
    font-size: 14px

  .message > img
    width: 40px
    height: 40px
    margin-left: 15px
    float: right

  .self
    text-align: left

  .self > img
    float: left
    margin-right: 15px

  .self > div:after
    content: " "
    position: absolute
    top: 14px
    right: 100%
    border: 6px solid transparent
    border-right-color: white
    border-right-width: 4px

  .self > div
    background-color: white

</style>