const express = require('express')
const Router = express.Router()

Router.get('/info',function(req,res){
  // 用户有没有cookie
  return res.json({code:0})
})

module.exports = Router