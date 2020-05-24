// pages/image/image.js
Page({
  data: {
    image: ''
  },
  handleChooseAlbum(){
    wx.chooseImage({
      complete: (res) => {
        const imagePath = res.tempFilePaths[0]
        this.setData({
          image: imagePath
        })
      },
    })
  },
  bindLoadImage(){
    console.log("加载图片")
  }

})