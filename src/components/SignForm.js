import React from 'react';
import './css/signform.css'
import {connect} from 'react-redux'
import {signIn} from '../redux/actions/actions.js'
class SignForm extends React.Component{
  constructor(){
    super()
    this.formSubmit=this.formSubmit.bind(this)
  }
  state={
    name:'',
    password:''
  }
  formSubmit(e){
    let sign=this.props.match.params.id
    e.preventDefault()
    let data={
      username:this.state.name,
      password:this.state.password
    }
    if(data.username&&data.password){
      this.props.dispatch(signIn(data,sign))
      this.setState({name:'',password:''})
    }else{
      alert('用户名和密码不能为空')
    }
  }
  render(){
    return (
      <div className='signform'>
        <form onSubmit={this.formSubmit} >
          <div>
            <input className='input1' value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}} type='text' placeholder='请输入用户名'/>
            <input value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}} type='password' placeholder='请输入密码'/>
          </div>
          <button className='sub_button' type='submit'>{this.props.match.params.id==='signin'?'登录':'注册'}</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({})
export default connect(mapStateToProps)(SignForm)
