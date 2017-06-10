import React from 'react';
import axios from 'axios';
class SignForm extends React.Component{
  constructor(){
    super()
    this.formSubmit=this.formSubmit.bind(this)
    this.state={
      name:'',
      password:''
    }
  }
  formSubmit(e){
    e.preventDefault()
    let data={
      username:this.state.name,
      password:this.state.password
    }
    axios.post('http://petapi.haoduoshipin.com:3008/user/signup',data)
    .then(res=>{
      alert('注册成功')
      this.setState({name:'',password:''})
    })
    .catch(err=>alert('用户名重复'))

  }
  render(){
    return (
      <div>
        <form onSubmit={this.formSubmit} >
          <input value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}} type='text' placeholder='请输入用户名'/>
          <input value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}} type='password' placeholder='请输入密码'/>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}
export default SignForm
