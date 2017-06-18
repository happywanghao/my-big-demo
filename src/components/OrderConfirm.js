import React from 'react';
import './css/orderConfirm.css'
import {connect} from 'react-redux'
import {getNowRouter} from '../redux/actions/actions.js'
import axios from 'axios'
class OrderConfirm extends React.Component{
  componentDidMount(){
    this.props.dispatch(getNowRouter('订单确认'))
  }
  remarksInputChange(){
    this.props.dispatch({type:'ADDREMARKS',content:this.remarksInput.value})
  }
  submitOrder(){
    if(this.props.user.userId){
      let data={userId: this.props.user.userId, products:this.props.shoppingCart}
      axios.post('http://petapi.haoduoshipin.com/order/new',data)
      .then(res=>{
        alert(res.data.msg)
        this.props.dispatch({type:'RESETSHOPPINGCART'})
        this.props.dispatch({type:'RESETFOODLISTNUM'})
        this.props.history.goBack()
      })

    }else{
      alert('请先登录')
      this.props.history.push('/mine/signin')
    }

  }
  render(){
    return (
      <div className='order-confirm'>
        {this.props.shoppingCart.shoppingCartFoodList?
          <ul className='food-list'>
            {this.props.shoppingCart.shoppingCartFoodList.map(item=>(
              <li className='food-item clearfix' key={item._id}>
                <span className='food-item-name'>{item.name}</span>
                <span className='food-item-num'>x{item.num}</span>
                <span className='food-item-price'>¥{item.num*item.price}</span>
              </li>
            ))}
            <li style={{paddingLeft:'0.3rem',background:'#fff',height:'1.3rem',borderBottom:'1px solid #ccc',lineHeight:'1.3rem'}}>
              备注:<input onChange={this.remarksInputChange.bind(this)} ref={item=>{this.remarksInput=item}} placeholder="填写备注信息" style={{width:'8rem',paddingLeft:'0.3rem'}} type='text'/>
            </li>
            <li className='clearfix'>
              <p style={{float:'left',width:'6rem',fontSize:'0.5rem'}}>总计 ¥{this.props.shoppingCart.total}</p>
              <p style={{float:'left',fontSize:'0.5rem'}}>实付
                <span style={{color:'#fe4d3d',fontSize:'0.6rem'}}> ¥{this.props.shoppingCart.total}</span>
              </p>
            </li>
          </ul>
        :null}
        <div className='food-list-submit'>
          <div className="food-list-submit-1">待支付<span>¥{this.props.shoppingCart.total}</span></div>
          <div onClick={this.submitOrder.bind(this)} className='food-list-submit-2'>提交订单</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  shoppingCart:store.shoppingCart,
  user:store.user
})
export default connect(mapStateToProps)(OrderConfirm)
