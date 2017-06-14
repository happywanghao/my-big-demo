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
    e.preventDefault()
    this.setState({
      inputVal:this.input.value
    })
    if(this.input.value){
      this.props.dispatch(search(this.input.value))
    }else{
      this.props.dispatch(removeList())
    }
  }
  render(){
    let reg=new RegExp(this.state.inputVal,'g')
    return (
      <div className="search">
        <div className="top">
          <form onSubmit={this.inputChange.bind(this)}>
            <span className='iconfont iconfont1'>&#xe600;</span>
            <input ref={it=>this.input=it} onChange={this.inputChange.bind(this)} placeholder='请输入商家、商品名' type='text'/>
            <button type='submit'>搜索</button>
          </form>
        </div>
        <div className="body">
            {
              this.props.searchList.length>0?
                <ul>
                  {this.props.searchList.map(item=>(
                    <li key={item._id} dangerouslySetInnerHTML={{__html:item.name.replace(reg,`<span style='color:red'>${this.state.inputVal}</span>`)
                    }}/>
                  ))}
                </ul>
              :this.state.inputVal.length>0?
                <div className='noList'>
                  <img alt='没找到' src='http://xs01.meituan.net/waimai_i/img/kangaroo.ad18ec6c.png'/>
                  <p>没有找到相关的商家或商品</p>
                </div>
              :null
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps=(store)=>({
  searchList:store.searchList
})
export default connect(mapStateToProps)(Search)
