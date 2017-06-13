import React from 'react';
import './css/search.css'
import {connect} from 'react-redux'
import {getNowRouter} from '../redux/actions/actions.js'
class Search extends React.Component{
  componentDidMount(){
    this.props.dispatch(getNowRouter('搜索'))
  }
  render(){
    return (
      <div className='search'>
        <div className="top">
          <form>
            <input placeholder='请输入商家、商品名' type='text'/>
            <button type='submit'>搜索</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(store)=>({
})
export default connect(mapStateToProps)(Search)
