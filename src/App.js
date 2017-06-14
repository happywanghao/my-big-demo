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
import Search from './components/Search.js'
class App extends React.Component{
  componentDidMount(){
    if(sessionStorage.userId&&JSON.parse(sessionStorage.userId)){
      this.props.dispatch({type:'LOADUSERNAME',content:JSON.parse(sessionStorage.userId)})
      this.props.dispatch(signIn(JSON.parse(sessionStorage.userId),'GETUSERNAME'))
    }
  }

  render(){
    return (
        <Router>
          <div className='app'>
            <Header/>
            {/* <div id='main'> */}
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/order' component={Order}/>
                <Route path='/mine' component={Mine}/>
                <Route path='/search' component={Search}/>
              </Switch>
            {/* </div> */}
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
