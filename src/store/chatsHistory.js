const msg = (str, time, self = false) => ({
  msg: str,
  time,
  self
})

const chatsHistory = {
  '1000': [
    msg('你好，最近怎么样？', new Date(), true),
    msg('挺好的，你呢？', new Date()),
    msg('我也不错，有空一起喝杯咖啡吧。', new Date(), true),
    msg('好呀，周末见！', new Date())
  ],
  '1001': [
    msg('周末一起去散步吗？', new Date()),
    msg('下午两点在公园门口见吧。', new Date())
  ]
}

export default chatsHistory
