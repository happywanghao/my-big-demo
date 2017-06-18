import React from 'react';
import './css/home.css';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getNowRouter,addPosition,getShopList} from '../redux/actions/actions.js'
class Home extends React.Component{
  state={}
  componentDidMount(){
    this.props.dispatch(addPosition())
    this.props.dispatch(getNowRouter('首页'))
    this.props.dispatch(getShopList())
  }
  render(){

    let position=this.props.position
    return (
      <div className='home'>
        <div className="top">
          <div className='position'>
            <p>
              <span className='iconfont'>&#xe604;</span>
              {
                position.city?
                <span>{position.street}...</span>
                :position.errorPosition?
                position.errorPosition
                :'加载中...'
              }
              <span className='iconfont'>&#xe601;</span>
            </p>
          </div>
          <div className='search'>
            <Link to='./search'>
              <span className='iconfont'>&#xe600;</span>
              &nbsp;输入商家名、商品名
            </Link>
          </div>
        </div>
        <div className='content'>
          <ul>
          {this.props.shopList.map(item=>(
            <li key={item._id}><Link to={`/restaurant/${item.name}/allfood`}>{item.name}</Link></li>
          ))}
          </ul>
        </div>

      </div>
    )
  }
}
const mapStateToProps=store=>({
  position:store.position,
  shopList:store.shopList
})
export default connect(mapStateToProps)(Home)
//39.902309
//119.545952
