App({
  //生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    //获取用户信息

    console.log("初始化完成");
    //  wx.request({
    //    url: '',
    //  })

    //异步调用
    // wx.getUserInfo({
    //   withCredentials: true,
    //   success:function(res){
    //     console.log(res);
    //   },
    //   fail: function (res){
    //     console.log(res);

    //   }
    // })

    setTimeout(function() {
      const err = new Error();
      throw err;
    }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    console.log("页面显示,onShow");

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    //推出小程序
    console.log("页面被隐藏,onHide");

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log("错误执行,onError");

  }
})