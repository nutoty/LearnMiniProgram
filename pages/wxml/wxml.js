// pages/wxml/wxml.js
Page({
  data: {
    now: new Date().toLocaleString(),
    isActive: false
  },
  onLoad(){
   setInterval(() => {
    this.setData({
      now: new Date().toLocaleString()
    })
   },1000)
  },
  handleCss(){
    this.setData({
      isActive: !this.data.isActive
    })
  }
})