import React from 'react';
import './css/home.css';
import {connect} from 'react-redux'
import {getNowRouter,addPosition} from '../redux/actions/actions.js'
class Home extends React.Component{
  state={}
  componentDidMount(){
    this.props.dispatch(addPosition())
    this.props.dispatch(getNowRouter('首页'))
  }
  render(){
    let position=this.props.position
    return (
      <div className='home'>
        <p style={{width:'3rem',fontSize:'0.3rem',height:'1.5rem',padding:'0.5rem 0.2rem'}}>
          {
            position.city?
            <span>{position.city}&nbsp;{position.district}&nbsp;<br/>{position.street}</span>
            :position.errorPosition?
            position.errorPosition
            :'正在定位...'
          }
        </p>

      </div>
    )
  }
}
const mapStateToProps=store=>({
  position:store.position
})
export default connect(mapStateToProps)(Home)
//39.902309
//119.545952
