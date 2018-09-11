const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user',userRouter)
app.use(cookieParser)

app.listen(8888,function(){
  console.log('Node app start at port 8888')
})