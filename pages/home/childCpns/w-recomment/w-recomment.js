// pages/home/childCpns/w-recomment/w-recomment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: false


  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad() {
      // 页面不刷新的情况下可以不用setData
      if (!this.data.isLoad) {
        this.triggerEvent('imageload')
        this.data.isLoad = true
      }
    }
  }
})