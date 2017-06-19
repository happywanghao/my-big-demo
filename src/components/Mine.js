import React from 'react'
import './css/mine.css'
import {connect} from 'react-redux'
import {NavLink,Route} from 'react-router-dom'
import {getNowRouter} from '../redux/actions/actions.js'
import SignForm from './SignForm.js'
import PromptBox from './PromptBox.js'
import HeadPortrait from './HeadPortrait.js'
class Mine extends React.Component{
  state={
    PromptBox:false
  }
  componentDidMount(){
    this.props.dispatch(getNowRouter('我的'))
    if(!this.props.user.username){
      this.props.history.push('/mine/signin')
    }
  
  }
  signOut(){
    sessionStorage.userId=''
    this.props.dispatch({type:"UNSIGN"})
    this.setState({PromptBox:false})
  }
  PromptBoxNone(){
    this.setState({PromptBox:false})
  }
  render(){
    return (
      <div className='mine'>
          {
            this.props.user.username ?//登录状态
            <div>
              <HeadPortrait username={this.props.user.username}/>
              <ul className="mine_ul">
                <li style={{textAlign:'center'}}>{this.props.user.username}</li>
                <li><span className='iconfont_mine_ul'>&#xe654;</span>收货地址管理<span className='right'>&#xe662;</span></li>
                <li><span className='iconfont_mine_ul'>&#xe6c0;</span>商家代金<span className='right'>&#xe662;</span></li>
                <li><span className='iconfont_mine_ul'>&#xe630;</span>意见反馈<span className='right'>&#xe662;</span></li>
                <li><span className='iconfont_mine_ul'>&#xe61e;</span>常见问题<span className='right'>&#xe662;</span></li>
                <li><span className='iconfont_mine_ul'>&#xe60c;</span>客服电话:15133555096<span className='right'>&#xe662;</span></li>
              </ul>

              <button className='unsign' onClick={()=>{this.setState({PromptBox:true})}} >退出登录</button>
            </div>
            :
            this.props.user.userId?   //加载状态
            <div>请稍等..加载中..</div>
            :                             //未登录状态
            <div className='mine_sign_form'>
              <div className='mine_sign_switch'>
                <NavLink activeClassName='navsign' to='/mine/signin'>登录</NavLink>
                <NavLink activeClassName='navsign' to='/mine/signup'>注册</NavLink>
              </div>
              <Route path='/mine/:id' component={SignForm}/>
            </div>
          }
          {this.state.PromptBox?
            <PromptBox title='退出后将无法查看当前订单,确定退出吗?' cancel={this.PromptBoxNone.bind(this)} sure={this.signOut.bind(this)}/>
          :null
          }
      </div>
    )
  }
}
const mapStateToProps=store=>({
  user:store.user,

})
export default connect(mapStateToProps)(Mine)
