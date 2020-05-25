// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrementCounter(num){
      this.setData({
        counter: this.data.counter + num
      })
    }
  },
  //可以监听properties/data数据里的改变
  observers: {
    counter: function(newVal){
      console.log(newVal)
    }
  },

  //监听所在页面的生命周期
  pageLifetimes: {
    show(){
      console.log("监听所在页面显示出来时")
    },
    hide(){
      console.log("监听组件所在页面隐藏起来时")
    },
    resize(){
      console.log("监听页面尺寸被改变时")
    }
  },

  //2.监听组件本身的生命周期
  lifetimes: {
    created(){
      console.log("组件被创建出来时")
    },
    attached(){
      console.log("组件被添加到页面")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到另外一个节点")
    },
    detached(){
      console.log("组件被移除掉")
    }
  }
})
