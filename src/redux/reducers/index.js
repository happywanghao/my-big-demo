import {combineReducers} from 'redux'

function routerReducer(state='',action){
  switch(action.type){
    case 'ROUTER':
      return action.content
    default:
      return state
  }
}
function positionReducer(store={},action){
  switch(action.type){
    case 'POSITION':
      return action.content
    default:
      return store
  }
}

export default combineReducers({nowRouter:routerReducer,position:positionReducer})
