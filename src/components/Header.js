import React from 'react'
import './header.css'
import {connect} from 'react-redux'
class Header extends React.Component{
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return (
      <div className='header'>
        <p className='title'>{this.props.nowRouter}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  nowRouter: state.nowRouter
});
export default connect(mapStateToProps)(Header)
