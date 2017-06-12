import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from './redux/actions/actions.js'
import './app.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Order from './components/Order.js'
import Mine from './components/Mine.js'
class App extends React.Component{
  componentDidMount(){
    if(sessionStorage.userId){
      this.props.dispatch({type:'sessionStorageId',content:JSON.parse(sessionStorage.userId)})
      this.props.dispatch(signIn(JSON.parse(sessionStorage.userId),'GETUSERNAME'))
    }
  }
  componentWillReceiveProps(newprops){
    if(newprops.user.userId){
      sessionStorage.userId=JSON.stringify(newprops.user.userId)
    }
  }
  render(){
    return (
        <Router>
          <div className='app'>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/order' component={Order}/>
              <Route path='/mine' component={Mine}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    )
  }
}
const mapStateToProps=(store)=>({
  user:store.user
})
export default connect(mapStateToProps)(App)
