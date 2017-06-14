import React from 'react';
import axios from 'axios';
import './css/head_portrait.css';
import {connect} from 'react-redux'
class HeadPortrait extends React.Component{
  state={
    user_head_portrait:''
  }
  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.props.username}`)
    .then(res=>{
      this.props.dispatch({type:'USERHEADPORTRAIT',content:res.data.avatar_url})
    })
    .catch(err=>{
        this.props.dispatch({type:'USERHEADPORTRAIT',content:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497443444027&di=007889c015f91d141eccf80f708caaa3&imgtype=0&src=http%3A%2F%2Fstatic.freepik.com%2Ffree-photo%2Fgithub-circled_318-10752.jpg'})
      })
  }
  render(){
    return (
      <div className="head_portrait">
        <img alt='头像' src={this.props.user.user_head_portrait}/>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  user:store.user
})
export default connect(mapStateToProps)(HeadPortrait)
