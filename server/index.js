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
   console.log("hiei",user)
   if(error) return callback(error)
   socket.join(user.room)
   callback()
    
 })
  socket.on('send-code',async(data)=>{
    const user = await getUser(socket.id);
    console.log("from sendcode",user)
    io.to(user.room).emit('recieve-code',data)

  })
  socket.on('disconnect',()=>{
    const user=removeUser(socket.id)
   
})



    console.log('connected')
})




server.listen(5000,()=>{
    console.log('Reached server')
})