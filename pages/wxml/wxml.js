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
    movies:['星际穿越','三毛','大话西游'],
    nums:[
      [10,14,11,18],
      [20,24,31,48],
      [110,124,211,318]
    ],
    letters: ['a', 'b', 'c'],
    doue: 25.666666.toFixed(2)
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