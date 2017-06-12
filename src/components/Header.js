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
        {this.props.user.username?
          <div className='welcome'>欢迎您:<br/>{this.props.user.username}</div>
        :
          <div className='tosign'><Link to='/mine/signin'>登录/注册</Link></div>
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
