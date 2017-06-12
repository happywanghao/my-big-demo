import React from 'react';
import './css/order.css'
import {connect} from 'react-redux'
import {getNowRouter} from '../redux/actions/actions.js'
class Order extends React.Component{
  componentDidMount(){
    this.props.dispatch(getNowRouter('订单'))
  }
  render(){
    return (
      <div className='order'>
        order
      </div>
    )
  }
}
const mapStateToProps=(store)=>({})
export default connect(mapStateToProps)(Order)
