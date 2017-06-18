import React from 'react';
import {connect} from 'react-redux'
import './css/allfood.css'
import {getFoodList,getNowRouter} from '../redux/actions/actions.js'
class AllFood extends React.Component{
  state={aa:1}
  constructor(){
    super()
  }
  componentDidMount(){
    if(this.props.foodList.length<1){
      this.props.dispatch(getFoodList(this.props.match.params.id))
    }
    this.props.dispatch(getNowRouter(this.props.match.params.id))
  }
  addNum(index,num){
    let bb=this.props.foodList.map((it,i)=>(i===index ? {...it,num:it.num+num} : it))
    this.props.dispatch({type:'GETFOOTLISTADDNUM',content:bb})
    setTimeout(()=>{
      let res=this.props.foodList.map(it=>(it.num*it.price)).reduce((a,b)=>(a+b))
      this.props.dispatch({type:'SHOPPINGCARTOTAL',content:res})
    },0)
  }

  componentWillReceiveProps(newProps){
    if(newProps.foodList.length>0 && !newProps.foodList[0].num && this.state.aa){
      this.props.dispatch({type:'GETFOOTLISTADDNUM',content:newProps.foodList.map(it=>({...it,num:0}))})
      this.setState({aa:0})
    }
  }
  render(){
    return (
      <div className='allfood'>
        <ul className='allfood-ul'>
          {
            this.props.foodList.map((item,index)=>(
              <li className='fooditem' key={item._id}>
                <img className="food-pic" src={item.poster} alt='照片'/>
                <div className='food-cont'>
                  <div className='food-name'>{item.name}</div>
                  <div className='food-price-region'>
                    <span className="food-price">¥{item.price}</span>
                    <div className='j-item-console'>
                      {item.num===0?null:
                        <div style={{display:'inline'}}>
                          <span className='iconfont i-remove-food' onClick={this.addNum.bind(this,index,-1)}>&#xe62a;</span>
                          <span className="foodop-num" >{item.num}</span>
                        </div>
                      }
                      <span className="iconfont i-add-food" onClick={this.addNum.bind(this,index,1)}>&#xe663;</span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        {this.props.shoppingCart.total?
          <div className='shoppingcart'>
              <div className='shoppingcart-pic'>
                <span className='iconfont'>&#xe75b;</span>
              </div>
              <div className="shoppingcart-content">
                <p className='total'>¥{this.props.shoppingCart.total}</p>
                <p className='explain'>配送费以订单为准</p>
              </div>
              <div className="settlement">去结算</div>
          </div>
        :
          <div className='shoppingcart'>
              <div className='shoppingcart-pic'>
                <span style={{color:'#ccc'}} className='iconfont'>&#xe75b;</span>
              </div>
              <div className="shoppingcart-content" style={{color:'#ccc',lineHeight:'1.7rem'}}>
                购物车空空如也~
              </div>
              <div style={{background:'#ccc',color:'#fff'}} className="settlement">¥15起送</div>
          </div>
      }

      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  foodList:store.foodList,
  shoppingCart:store.shoppingCart
})
export default connect(mapStateToProps)(AllFood)
