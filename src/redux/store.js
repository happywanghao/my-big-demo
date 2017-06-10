import {createStore,applyMiddleWare } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleWare(thunk))

export default store
