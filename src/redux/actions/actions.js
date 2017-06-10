import axios from "axios"
const getComments=()=>(
  dispatch=>(
    axios.get('http://redux-hello.haoduoshipin.com/comments/')
    .then(res=>{
      dispatch({type:"GET_COMMENTS",connect:res.data.comments})
    })
  )
)
export { getComments }
