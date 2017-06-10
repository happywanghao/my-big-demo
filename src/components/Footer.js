import React from 'react';
import {NavLink} from 'react-router-dom'
import './footer.css'
class Footer extends React.Component{
  render(){
    return (
      <div className='footer'>
        <div className='footer-home'>
          <NavLink activeClassName='active' exact to='/'>
          <span className='iconfont'>&#xe632;</span><br/>
          <span>首页</span>
          </NavLink>
        </div>
        <div className='footer-order'>
          <NavLink activeClassName='active' to='/order'>
          <span className='iconfont'>&#xe615;</span><br/>
          <span>订单</span>
          </NavLink>
        </div>
        <div className='footer-mine'>
          <NavLink activeClassName='active' to='/mine'>
          <span className='iconfont'>&#xe63b;</span><br/>
          <span>我的</span>
          </NavLink>
        </div>
      </div>
    )
  }
}
export default Footer
