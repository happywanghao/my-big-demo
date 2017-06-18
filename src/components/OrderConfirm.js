import React from 'react';
import './css/orderConfirm.css'
import {connect} from 'react-redux'
class OrderConfirm extends React.Component{
  componentDidMount(){}
  render(){
    return (
      <div className='order-confirm'>
        {this.props.shoppingCart.shoppingCartFoodList?
          <ul>
            {this.props.shoppingCart.shoppingCartFoodList.map(item=>(
              <li key={item._id}>
                <span>{item.name}</span>
                <span>*{item.num}</span>
                <span>¥{item.num*item.price}</span>
              </li>
            ))}
            <li>
              <span>总计 ¥{this.props.shoppingCart.total}</span>
              <span>实付 ¥{this.props.shoppingCart.total}</span>
            </li>
          </ul>
        :null}
        <div>
          <div>待支付¥{this.props.shoppingCart.total}</div>
          <div>提交订单</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  shoppingCart:store.shoppingCart
})
export default connect(mapStateToProps)(OrderConfirm)
