// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('options', options)
  },
  handleback(){
    wx.navigateBack({
      delta:1
    })
  },
  onUnload() {
    console.log('页面退出');
    // 1\获取首页的页面对象
    // getCurrentPages当前所有栈的页面
    const pages=getCurrentPages();
    const home = pages[pages.length-2]
    home.setData({
      title:'heheh'
    })
  }




})