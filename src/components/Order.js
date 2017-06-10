import React from 'react';
import {connect} from 'react-redux'
import {getNowRouter} from '../redux/actions/actions.js'
class Order extends React.Component{
  componentDidMount(){
    this.props.dispatch(getNowRouter('我的订单'))
  }
  render(){
    return (
      <div>
        order
      </div>
    )
  }
}
const mapStateToProps=(store)=>({})
export default connect(mapStateToProps)(Order)
