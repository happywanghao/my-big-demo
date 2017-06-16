import React from 'react';
import {connect} from 'react-redux'
import './css/allfood.css'
import {getFootList,getNowRouter} from '../redux/actions/actions.js'
class AllFood extends React.Component{
  state={aa:1,showList:[],res:0}
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.dispatch(getFootList(this.props.match.params.id))
    this.props.dispatch(getNowRouter(this.props.match.params.id))
  }
  addNum(index){
    let bb=this.state.showList.map((it,i)=>(i===index ? {...it,num:it.num+1} : it))
    this.setState({showList:bb})
    setTimeout(()=>{
      let res=this.state.showList.map(it=>(it.num*it.price)).reduce((a,b)=>(a+b))
      this.setState({res:res})
    },0)
  }

  minus(index){
    let aa=this.state.showList
    let bb=aa.map((it,i)=>(i===index ? {...it,num:it.num===0?0:it.num-1} : it))
    this.setState({showList:bb})
    setTimeout(()=>{
      let res=this.state.showList.map(it=>(it.num*it.price)).reduce((a,b)=>(a+b))
      this.setState({res:res})
    },0)
  }
  componentWillReceiveProps(newProps){
    if(newProps.foodList.length>0&&this.state.aa){
      this.setState({showList:newProps.foodList.map(it=>({...it,num:0}))})
      this.setState({aa:0})
    }
  }
  render(){
    console.log(this.state.res);
    return (
      <div className='allfood'>
        <ul>
          {
            this.state.showList.map((item,index)=>(
              <li key={item._id}>
                <img src={item.poster} alt='照片'/>
                <span>{item.name}</span>
                <span>&nbsp;&nbsp;单价：{item.price}</span>
                <button style={{float:'right',borderRadius:'100%',background:'#FFDB4C',color:'#fff',fontSize:'0.3rem'}} onClick={this.addNum.bind(this,index)}>+</button>
                {item.num===0?null:
                  <div>
                  &nbsp;<span style={{float:'right',display:'block'}}>{item.num}</span>&nbsp;
                    <button style={{borderRadius:'100%',background:'#FFDB4C',color:'#fff',fontSize:'0.3rem'}} onClick={this.minus.bind(this,index)}>-</button>
                  </div>
                }
              </li>
            ))
          }
        </ul>
        {this.state.res>0?
        <div style={{position:'absolute',bottom:0,height:'2rem'}}>
          <span style={{height:'2rem',float:'left',width:'1.5rem',fontSize:'1.5rem',background:'#fff',display:'block'}} className='iconfont'>&#xe664;</span>
          <span style={{height:'2rem',float:'left',width:'5.5rem',fontSize:'1.5rem',background:'#fff',display:'block'}}>{this.state.res}</span>
          <button>去结算</button>
        </div>
        :null
        }
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  foodList:store.foodList,
  ShoppingCart:store.ShoppingCart
})
export default connect(mapStateToProps)(AllFood)
