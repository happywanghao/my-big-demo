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
function userReducer(store={},action){
  switch(action.type){
    case 'REGISTER':
      return action.content
    case 'LOADUSERNAME':
      return {...store,userId:action.content}
    case 'GETUSERNAME' :
      console.log(action.content);
      return {...store,username:action.content}
    case 'UNSIGN' :
      return {}
    default:
      return store
  }
}
function searchReducer(store=[],action){
  switch(action.type){
    case 'SEARCH':
      return action.content
    case 'REMOVELIST':
      return []
    default:
      return store
  }
}
export default combineReducers({
  nowRouter:routerReducer,
  position:positionReducer,
  user:userReducer,
  searchList:searchReducer
})
