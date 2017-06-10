import React from 'react'
import './mine.css'
import {connect} from 'react-redux'
import {Link,Route} from 'react-router-dom'
import {getNowRouter} from '../redux/actions/actions.js'
import SignForm from './SignForm.js'
class Mine extends React.Component{
  componentDidMount(){
    this.props.dispatch(getNowRouter('我的'))
  }
  render(){
    return (
      <div>
        <div>
          <Link to='/mine/signin'>登录</Link>
          <Link to='/mine/register'>注册</Link>
          <Route path='/mine/:id' component={SignForm}/>
        </div>
      </div>
    )
  }
}
const mapStateToProps=store=>({})
export default connect(mapStateToProps)(Mine)
