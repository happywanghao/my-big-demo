import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import './app.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Order from './components/Order.js'
import Mine from './components/Mine.js'
import store from './redux/store.js'

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className='app'>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/order' component={Order}/>
              <Route path='/Mine' component={Mine}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App
