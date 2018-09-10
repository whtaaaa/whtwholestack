import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList = ['/login','/register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname) > -1){
      return null
    }
    console.log(this.props)
    // 获取用户信息
    axios.get('/user/info').then(res=>{
      if(res.status === 200){
        console.log(res.data)
        if(res.data.code === 0){

        }else{
          console.log('history')
          console.log(this.props.history)
          this.props.history.push('/login')
        }
      }
    })
    // 是否登陆
  }
  render(){
    return <p>判断跳转的地方</p>
  }
}

export default AuthRoute