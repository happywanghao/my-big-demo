import React from 'react';
import {connect} from 'react-redux'
import './css/allfood.css'
import {getFootList,getNowRouter} from '../redux/actions/actions.js'
class AllFood extends React.Component{
  componentDidMount(){
    this.props.dispatch(getFootList(this.props.match.params.id))

    this.props.dispatch(getNowRouter(this.props.match.params.id))
  }
  render(){
    console.log(this.props.foodList);
    return (
      <div className='allfood'>
        <ul>
          {this.props.foodList.map(item=>(
            <li key={item._id}>
              <img src={item.poster} alt='照片'/>
              <span>{item.name}</span>
              <span>&nbsp;&nbsp;单价：{item.price}</span>
              <button>加入购物车</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  foodList:store.foodList
})
export default connect(mapStateToProps)(AllFood)
