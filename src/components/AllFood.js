import React from 'react';
import {connect} from 'react-redux'
import './css/allfood.css'
import {getFootList,getNowRouter} from '../redux/actions/actions.js'
class AllFood extends React.Component{
  state={aa:1,showList:[]}
  constructor(){
    super()

  }
  componentDidMount(){
    this.props.dispatch(getFootList(this.props.match.params.id))
    this.props.dispatch(getNowRouter(this.props.match.params.id))
  }
  addNum(index){
    let aa=this.state.showList
    let bb=aa.map((it,i)=>(i===index ? {...it,num:it.num+1} : it))
    this.setState({showList:bb})
  }
  componentWillReceiveProps(newProps){
    if(newProps.foodList.length>0&&this.state.aa){
      this.setState({showList:newProps.foodList.map(it=>({...it,num:0}))})
      this.setState({aa:0})
    }
  }
  render(){
    return (
      <div className='allfood'>
        <ul>
          {
            this.state.showList.map((item,index)=>(
              <li key={item._id}>
                <img src={item.poster} alt='照片'/>
                <span>{item.name}</span>
                <span>&nbsp;&nbsp;单价：{item.price}</span>
                <span> &nbsp;&nbsp;数量:</span>
                <span>{item.num}</span>
                <button onClick={this.addNum.bind(this,index)}>+</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  foodList:store.foodList
})
export default connect(mapStateToProps)(AllFood)
