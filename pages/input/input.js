// pages/input/input.js
Page({
  data: {

  },
  handleBindInput(event){
    console.log("用户输入内容：",event)
  },
  handleBindFocus(event){
    console.log("input获取焦点：",event)
  },
  handleBindBlur(event){
    console.log("input失去焦点：",event)
  }
 
})