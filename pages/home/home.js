// pages/home/home.js
Page({
  data: {
    title: "哈哈哈"
  },
  handleNavigatorTo(){
    wx.navigateTo({
      url: '/pages/detail/detail?title="你好啊"',
    })
  }
})