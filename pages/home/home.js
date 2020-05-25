import request from "../../services/request.js"

Page({
  data: {

  },
  onLoad: function (options) {
    //1.普通的请求方式get
    // this.get_data_origin()
    // wx:wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/category',
    //   complete: (res) => {
    //     console.log(res)
    //   },
    // })
    //2.post请求的方式
    // wx:wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "POST",
    //   data:{
    //     name: "wuyong",
    //     age: 18
    //   },
    //   success: function(res){
    //     console.log(res)
    //   }
    // })

    //2.封装好的网络请求方式
    request({
      url: 'http://152.136.185.210:8000/api/n3/category'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

  },
  get_data_origin(){
    wx:wx.request({
      url: 'http://152.136.185.210:8000/api/n3/category',
      complete: (res) => {
        console.log(res)
      },
    })
  }
})