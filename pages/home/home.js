// pages/home/home.js
Page({
  data: {
    titles: ["衣服","鞋子","内衣"]
  },
  handleBtnClick(){
    console.log("我被点击了")
  },
  handleTouchStart(event){
    console.log("handleTouchStart手指触摸动作开始",event)
  },
  handleTouchMove(event){
    console.log("handleTouchMove手指触摸后移动",event)
  },
  handleTouchEnd(event){
    console.log("handleTouchEnd手指触摸动作结束",event)
  },
  handleTap(event){
    console.log("handleTap手指触摸后马上离开",event)
  },
  handleLongpress(event){
    console.log("handleLongpress手指长按",event)
  },
  handleItemClick(event){
    const dataset = event.currentTarget.dataset;
    const index = dataset.index
    const item = dataset.item
    console.log(index + " "+item)
  },

  // 事件的捕获与冒泡
  handleCaptureView1(){
    console.log("handleCaptureView1")
  },
  handleCaptureView2(){
    console.log("handleCaptureView2")
  },
  handleCaptureView3(){
    console.log("handleCaptureView3")
  },
  handleView1(){
    console.log("handleView1")
  },
  handleView2(){
    console.log("handleView2")
  },
  handleView3(){
    console.log("handleView3")
  },
})