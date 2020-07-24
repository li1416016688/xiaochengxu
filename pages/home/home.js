// pages/home/home.js
import request from '../../service/network.js'
Page({
  handleShowaction(){
  wx.showActionSheet({
    itemList: ['相册','拍照'],
    itemColor: 'yellow',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '我是认真的',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(()=>{
      // 必须调用这个才能让蒙版消失
      wx.hideLoading()

    },3000)
  },
  handleShowModal() {
    wx: wx.showModal({
      title: '我是showModal',
      content: '我是内容,哈哈哈',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      confirmText: '进入',
      confirmColor: 'green',

      success: function(res) {
        console.log(res);
        if (res.cancel) {
          console.log("取消");

        }
        if (res.confirm) {
          console.log("确定");

        }
        // if(res.cancel==true){
        //   console.log("取消");

        // } else if (res.cancel == false){
        //   console.log("确定");

        // }
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  handleShowToast() {
    wx.showToast({
      title: '你好啊',
      duration: 3000,
      icon: 'loading',
      // image:'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/nicon_10750f3.png',
      mask: true,
      success: function() {
        console.log('chele');
      },
      fail: function() {

      },
      complete: function() {}
    })
  }


})