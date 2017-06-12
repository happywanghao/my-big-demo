import React from 'react';

class PromptBox extends React.Component{
  sure(){
    this.props.sure()
  }
  cancel(){
    this.props.cancel()
  }
  render(){
    let style8={position:"fixed",margin:"auto", top:"0",  bottom:"0", left:"0",right:"0", backgroundColor:"rgba(0, 0, 0, 0.6)", display:'block', justifyContent:"center", alignItems:"center", zIndex:"999",}
    let style9={width:"100%", maxWidth:"8rem", height:"3rem",padding:'0.5rem', backgroundColor:"rgb(255, 255, 255)", border:"1px solid rgb(221, 221, 221)", borderRadius:"5px", color:"rgb(244, 67, 54)",position:"fixed",margin:"auto", top:"0",  bottom:"0", left:"0",right:"0",}
    let textStyle={fontSize:'0.5rem',textAlign:'center'}
    let style10={position: "absolute", bottom: "0.3rem", right: "0.3rem",}
    let style11={cursor:"pointer",textDecoration:'none', display: "inline-block", paddingLeft: "0.5rem", paddingRight: "0.5rem", color: "rgb(0, 188, 212)", fontSize: "0.5rem",lineHeight:'0.8rem'}
    return (
      <div>
        <div style={style8}>
            <div style={style9}>
              <p style={textStyle}>{this.props.title}</p>
              <div style={style10}>
                <div onClick={this.sure.bind(this)} style={style11}>确定</div>
                <div onClick={this.cancel.bind(this)} style={style11}>取消</div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default PromptBox
