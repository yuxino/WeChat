<template>
  <div>
      <ChatTitle></ChatTitle>
      <ChatContent></ChatContent>
      <ChatText></ChatText>
  </div>
</template>

<script>
import ChatTitle   from './Title'
import ChatContent from './Content' 
import ChatText    from './Text'

export default {
  name: 'Chat',
  components: { ChatTitle , ChatContent , ChatText }
}
</script>