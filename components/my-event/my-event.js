// components/my-event/my-event.js
Component({
  properties: {

  },
  methods: {
    handleCount(){
      this.triggerEvent("increment",{name:"wuyong",age:18})
    }
  }
})
