// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: 'hello world',
      duration: 2000,
      mask: true,
      success: function(){
        console.log('......')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '标题',
      content: '我是内容',
      cancelText: '返回',
      cancelColor: '#FF0000'
      
    })
  },
  handleShowLoding(){
    wx.showLoading({
      title: '图片加载中',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['照片','拍照'],
      success(res){
        console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })
  },
  onShareAppMessage: function(options){
    return{
      title: 'hello world',
      path: '/pages/about/about',
      imageUrl: 'https://pics6.baidu.com/feed/f2deb48f8c5494ee2cfbed75076b57f898257e22.jpeg?token=aa43832914f597e729a90124af6f6231'
    }
  }
})