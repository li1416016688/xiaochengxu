// pages/home/home.js
import request from '../../service/network.js'
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
    // 1、发送网络请求
    this.get_data_origin()
    // 2、使用封装的request发送网络请求
    // promise最大的好处就是防止出现回调地狱
request({
  url='http://doc.nnzhp.cn/index.php?s=/6&page_id=8'
}).then(res=>{
  console.log(res);
}).catch(err =>{
  console.log(err);
})

  },

  get_data_origin(){
    // 发送网络请求
    // wx: wx.request({
    //   url: 'http://123.207.32.32:8080/recommend',

    //   success: function(res) {
    //     console.log(res)
    //   },

    // })
    //get请求携带参数
    // wx: wx.request({
    //   url: 'http://123.207.32.32:8080/recommend',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   },

    // })
    //post请求,并携带参数()
    
    wx: wx.request({
      url: 'http://httpbin.org/post',
      data: {
        name: 'coder',
        age: 14
      },
      header: {},
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        // 失败回调
      },
      complete: function (res) {
        // 调用结束的回调函数
        console.log("111");
      },
    })
  }
})