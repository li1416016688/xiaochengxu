// pages/home/home.js
Page({


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(options) {
    return {
      title: '你好',
      path: 'pages/about/about.wxml',
      imageUrl: 'https://pics4.baidu.com/feed/574e9258d109b3de8781d8114cc26e86800a4c14.jpeg?token=8e39aec6ea681f8bf69438ff8b3e9155'
    }
  }
})