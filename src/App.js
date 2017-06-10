import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './app.css'
import Top from './components/Top.js'
import Register from './components/Register.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Order from './components/Order.js'
import Mine from './components/Mine.js'

class App extends React.Component{
  render(){
    return (
        <Router>
          <div className='app'>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/order' component={Order}/>
              <Route path='/Mine' component={Home}/>

              {/* <Register/> */}
              {/* <Top/> */}
            </Switch>
            <Footer/>
          </div>
        </Router>
    )
  }
}
export default App
