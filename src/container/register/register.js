import React from 'react'
import Logo from '../../component/logo/logo'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from 'antd-mobile'

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type:'genius' //boss
    }
  }
  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>用户名</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type == 'genius'}>牛人</RadioItem>
          <RadioItem checked={this.state.type == 'boss'}>Boss</RadioItem>
          <WhiteSpace/>
          <Button type="primary">注册</Button>
        </List>
      </div>
    )
  }
}
export default Register