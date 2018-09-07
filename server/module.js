const mongoose = require('mongoose')
//链接本地
const DB_URL = 'mongodb://127.0.0.1:27017/whtsup'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongodb connect success')
})