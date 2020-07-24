// components/w-lab-control/w-lab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleclick(event){
      console.log(event);
      const index=event.currentTarget.dataset.index;
      console.log(index);
      this.setData({
        currentIndex:index,
      })

      // 3、通知页面内部的点击事件
      this.triggerEvent('itemclick',{index,title:this.properties.title[index]},{})
    }
  }
})