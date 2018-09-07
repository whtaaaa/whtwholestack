import React from 'react'
import { connect } from 'react-redux'
import { addGun,removeGun,addGunAsync } from './index_redux'

@connect(
  //你要什么属性放到props里
  state=>({num:state.counter}),
  //你要什么方法放到props里
  {addGun,removeGun,addGunAsync}
)
class App extends React.Component{
  render(){
    return (
      <div>
        <h3>现在有机枪{this.props.num}把</h3>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>上交武器==</button>
      </div>
    )
  }
}

export default App