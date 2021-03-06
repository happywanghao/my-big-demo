import React from 'react'
import './css/header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Header extends React.Component{
  componentDidMount(){

  }
  render(){
    return (
      <div className='header'>
        {this.props.nowRouter==='首页'?null:
        <div onClick={()=>{this.props.history.goBack()}} ><span className='iconfont back'>&#xe605;</span></div>
        }
        {this.props.user.username?
          <div className='welcome'>
            <Link to='/mine'>
              <img alt='头像' className='user_head_portrait' src={this.props.user.user_head_portrait}/>
            </Link>
          </div>
        :
          <div className='tosign'><Link to='/mine/signin'>请登录</Link></div>
        }
        <p className='title'>{this.props.nowRouter}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  nowRouter: state.nowRouter,
  user:state.user
});
export default connect(mapStateToProps)(Header)
