const mongoose = require('mongoose')
//链接本地
const DB_URL = 'mongodb://127.0.0.1:27017/whtsup'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongodb connect success')
})

const modules = {
  user: {
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    // 头像
    'avatar':{type:String},
    // 个人简介职位简介
    'desc':{type:String},
    // 职位名
    'title':{type:String},
    //Boss还有两个字段
    'company':{type:String},
    'money':{type:String}
  },
  chat: {

  }
}


for(let m in modules){
  console.log(m)
  mongoose.model(m,new mongoose.Schema(modules[m]))
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}