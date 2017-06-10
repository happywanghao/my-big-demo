import React from 'react';
let BMap=window.BMap

class Top extends React.Component{

  componentDidMount(){
    let showPosition=(position)=>{
      this.baidumap(position.coords.longitude,position.coords.latitude)
    }
    if (navigator.geolocation){
      navigator.geolocation.watchPosition(showPosition);
      }else{alert('不行')}
  }
  baidumap(latitude,longitude){

    var baidu_Point = new BMap.Point(latitude,longitude);  //经纬度坐标

    //地图初始化
    var map = new BMap.Map("map_address");
    map.centerAndZoom(baidu_Point, 40);//第二个参数指地图显示等级，数字越大显示越详细
    map.addOverlay(marker);
    map.openInfoWindow(infoWindow,baidu_Point);
    map.addControl(new BMap.NavigationControl()); //控制工具
    map.setCurrentCity("成都");                    // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);              //开启鼠标滚轮缩放

    //坐标转换完之后的回调函数
    let translateCallback = function (data){
        var marker = new BMap.Marker(data.points[0]);
        map.addOverlay(marker);
        var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
        marker.setLabel(label); //添加百度label
        map.setCenter(data.points[0]);
    }

        var convertor = new BMap.Convertor()
        var pointArr = [baidu_Point]
        convertor.translate(pointArr, 1, 5, translateCallback)











    var marker = new BMap.Marker(baidu_Point);               //标记
    var pos_info = "<h5>地点</h5>"
    +"<p style='font-size:12px;'>详细地址</p>"
    var infoWindow = new BMap.InfoWindow(pos_info);          //信息展示

    //地图初始化
  }
  render(){

    return (
      <div>
        <div id="map_address" style={{width: '100%', height: "50vh"}}></div>
      </div>
    )
  }
}
export default Top
