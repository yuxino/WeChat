export default {
  socket () {
    return (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production') ? 'http://127.0.0.1:8080' : 'http://www.nbsaw.com'
  }
}
