// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    title: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleClickCss(event){
      //1.获取index
      const index = event.currentTarget.dataset.index
      
      //2.修改currentIndxe的数据
      this.setData({
        currentIndex: index
      })
      //3.将当前的index，title传递外部
      this.triggerEvent('tabClick',{index,title: this.properties.title[index]},{})
    }
  }
})
