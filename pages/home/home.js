// pages/home/home.js
Page({
  data: {
    count: 0
  },
  getCounter(event){
    this.setData({
      count: this.data.count + 1
    })
  },
  handleClickTab(event){
    console.log(event)
  },
  handleData(){
    //通过selectComponent方法获取组件对象
    const mySel = this.selectComponent("#sel")
    // console.log(mySel),不建议直接修改组件里的数据
    // mySel.setData({
    //   counter: mySel.data.counter + 10
    // })

    //通过方法进行修改数据,推荐使用
    mySel.incrementCounter(20)
  }
})