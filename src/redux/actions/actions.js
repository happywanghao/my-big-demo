import axios from "axios"
import $ from 'jquery'
const addPosition=()=>(
  dispatch=>{
      let showPosition=(position)=>{
        console.log('5555');
        $.ajax({
          url: `http://api.map.baidu.com/geocoder/v2/?output=json&ak=h60kMdXBxcFeuem79GOZQtctxg1O3QTA&location=${position.coords.latitude},${position.coords.longitude}`,
          type: 'GET',
          dataType: 'JSONP',//here
          success: data=>{
            dispatch({type:'POSITION',content:{...data.result.addressComponent}})
          }
        });
      }
      let showError=error=>{
          dispatch({type:'POSITION',content:{errorPosition:'定位失败'}})
        }
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
      }else{alert('浏览器不支持定位')}
  }
)
//从百度地图API获取当前位置

const getNowRouter=(pos)=>(
  dispatch=>(
    dispatch({type:'ROUTER',content:pos})
  )
)
//显示当前路由位置
const signIn=(data,type)=>(
  dispatch=>{
    switch(type){
      case 'signup':
        axios.post('http://petapi.haoduoshipin.com:3008/user/signup',data)
        .then(res=>{
          alert(res.data.msg)
          dispatch({type:'REGISTER',content:res.data})
          sessionStorage.userId=JSON.stringify(res.data.userId)
        })
        .catch(err=>alert(err.request.response))
        break
      case 'signin':
        axios.post('http://petapi.haoduoshipin.com/user/signin',data)
        .then(res=>{
          console.log(res.data.msg)
          dispatch({type:'REGISTER',content:{username:res.data.user,...res.data}})
          sessionStorage.userId=JSON.stringify(res.data.userId)
        })
        .catch((err)=>{alert(err.request.response)})
        break
      case 'GETUSERNAME':
        axios.get(`http://petapi.haoduoshipin.com/user/${data}`)
        .then(res=>{
          console.log(res.data.msg);
          dispatch({type:'GETUSERNAME',content:res.data.user.username})
        })
        .catch((err)=>{alert(err.request.response)})
        break
      default:
        return false
        // .catch(err=>alert('用户名重复'))

    }

  }
)
//注册和登录账户和读取用户名


const search=(name)=>(
  dispatch=>{
    let data={key:name}
    axios.post('http://petapi.haoduoshipin.com/shop/search',data)
    .then(res=>{
      dispatch({type:'SEARCH',content:res.data.shops})
    })
  }
)
const getShopList=()=>(
  dispatch=>{
    axios.get('http://petapi.haoduoshipin.com/shops')
    .then(res=>{
      dispatch({type:"GETSHOPLIST",content:res.data.shops})
    })
  }
)

const removeList=()=>(
  dispatch=>{
      dispatch({type:'REMOVELIST'})
    }
)
//搜索商家
const getFoodList=(id)=>(
  dispatch=>{
    axios.get('http://petapi.haoduoshipin.com/products')
    .then(res=>{
      console.log(res.data.products)
      dispatch({type:'GETFOOTLIST',content:res.data.products})
    })
  }
)

export { getNowRouter,addPosition,signIn,search,removeList,getShopList,getFoodList}
