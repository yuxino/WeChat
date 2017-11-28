const msg = (str,time,self=false) => ({
  msg: str,
  time,
  self
})

const chatsHistory = {
  1000: [
    msg('cnbb',new Date(),true),
    msg('????',new Date()),
    msg('rnmm',new Date(),true),
    msg('cnm?',new Date())
  ],
  1001: [
    msg('hahahah',new Date()),
    msg('2333333',new Date())
  ]
}

export default chatsHistory