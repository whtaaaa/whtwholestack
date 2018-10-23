const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./module')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const Chat = model.getModel('chat')

io.on('connection',function(socket){
  console.log('user login')
  socket.on('sendmsg',function(data){
    const {from,to,msg} = data
    const chatid = [from,to].sort().join('-')
    console.log(chatid,from,to,msg)
    Chat.create({chatid,from,to,content:msg},function(err,doc){
      console.log(err)
      io.emit('recvmsg',Object.assign({},doc._doc))
    })
  })
})
//work with express

const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user',userRouter)

server.listen(8888,function(){
  console.log('Node app start at port 8888')
})