// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '你好,小程序',
    firstname: 'fass',
    lastname: 'lasst',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isshow: true,
    score:59,
    
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handlecolor() {
  
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleShow(){
    this.setData({
      isshow: !this.data.isshow
    })
  },
  handleincrement(){
    this.setData({
      score: this.data.score+8
    })
  }

})