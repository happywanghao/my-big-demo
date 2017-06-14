import React from 'react';
import './css/search.css'
import {search,removeList} from '../redux/actions/actions.js'
import {connect} from 'react-redux'
import {getNowRouter} from '../redux/actions/actions.js'
class Search extends React.Component{
  state={
    inputVal:''
  }
  componentDidMount(){
    this.props.dispatch(getNowRouter('搜索'))
  }
  inputChange(e){
    this.setState({
      inputVal:e.target.value
    })
    if(e.target.value){
      this.props.dispatch(search(e.target.value))
    }else{
      this.props.dispatch(removeList())
    }
  }
  render(){
    let reg=new RegExp(this.state.inputVal,'g')
    console.log(this.props.searchList);
    return (
      <div className="search">
        <div className="top">
          <form onSubmit={this.inputChange.bind(this)}>
            <input onChange={this.inputChange.bind(this)} placeholder='请输入商家、商品名' type='text'/>
            <button type='submit'>搜索</button>
          </form>
        </div>
        <div className="body">
          <ul>
            {this.props.searchList.map(item=>(
              <li key={item._id} dangerouslySetInnerHTML={{__html:item.name.replace(reg,`<span style='color:red'>${this.state.inputVal}</span>`)
              }}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(store)=>({
  searchList:store.searchList
})
export default connect(mapStateToProps)(Search)
