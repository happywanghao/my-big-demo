import React from 'react'
import axios from 'axios'
import $ from 'jquery'
import './header.css'
class Header extends React.Component{
  state={
    latitude:'',
    longitude:''
  }
  componentDidMount(){

    $.get('http://api.map.baidu.com/geocoder/v2/?output=json&ak=h60kMdXBxcFeuem79GOZQtctxg1O3QTA&location=39.902352,119.54601',function(data){console.log(data)})

    // let showPosition=(position)=>{
    //   this.setState({
    //     latitude:position.coords.latitude,
    //     longitude:position.coords.longitude
    //   })
    //   axios.get(`http://api.map.baidu.com/geocoder/v2/?output=json&ak=h60kMdXBxcFeuem79GOZQtctxg1O3QTA&location=${position.coords.latitude},${position.coords.longitude}`)
    //   .then(res=>console.log(res))
    // }
    // if (navigator.geolocation){
    //   navigator.geolocation.getCurrentPosition(showPosition);
    // }else{alert('无法获取您的位置信息')}
  }
  render(){
    return (
      <div className='header'>
        <p>{this.state.latitude}.....{this.state.longitude}</p>
      </div>
    )
  }
}
export default Header
