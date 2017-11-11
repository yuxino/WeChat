var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');

app.use(cors());

io.on('connection', function (socket) {
  socket.on("sendMsg",function(message){
    socket.broadcast.emit('message', message);
  });
  socket.on("new user",function(username){
    socket.broadcast.emit("new user",username)
  })
});

server.listen(8080,()=>console.log("server is runing .."))