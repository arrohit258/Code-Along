const express=require('express')
const http=require('http')
const socketio=require('socket.io')
const {addUser,removeUser,getUser}=require('./users')
const app=express()

const cors = require('cors');
const server=http.createServer(app)
const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });

const router=require('./router')
app.use(express.json())
app.use(cors());
app.use(router)

io.on('connection',(socket)=>{
  socket.on('join',({name,room},callback)=>{
    console.log(name)
   const {error,user}=addUser({id:socket.id,name,room})  
   if(error) return callback(error)
   socket.join(user.room)
   callback()
    
})
  socket.on('send-code',(code)=>{
    const user = getUser(socket.id);
    
    socket.broadcast.emit('recieve-code',code)

  })




    console.log('connected')
})




server.listen(5000,()=>{
    console.log('Reached server')
})