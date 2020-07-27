const TOKEN = 'token'
App({
  // 对象:小程序关闭后对象回收
  globalData() {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    //1、从缓存中将token取出
    const token = wx.getStorageInfoSync(TOKEN);
    console.log('token', token)
    // 2、判断token是否有值
    if (token && token.length !== 0) {
      //已经有token,验证token过期

      this.check_token(token);
    } else {
      this.login();
    }
  },
  check_token(token) {
    console.log('token', token)

    console.log('验证token');

    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      header: {
        token
      },
      method: 'post',

      success: (res)=> {
        console.log('checkres', res);
        if (!res.data.errorCode) {
          console.log('token是有效的')
          this.globalData.token = token;

        } else {
          console.log('token无效的,重新登陆')

          this.login();
        }
      },
      fail: function(err) {
        console.log('checkerr', err);

      }
    })
  },
  login() {
    console.log('执行登陆操作');
    // 登陆操作
    wx.login({

      success: (res) => {
        // console.log(res);
        //获取code
        const code = res.code;
        console.log(code);
        // 向自己的服务器发送code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          header: {},
          method: 'post',
          dataType: 'json',
          responseType: 'text',
          success: (res) => {
            console.log(res);
            //1、取出token
            const token = res.data.token;
            //2、将token保存在globalData中
            this.globalData.token = token;
            //进行本地储存
            wx: wx.setStorageSync(TOKEN, token)
          },
          fail: function(res) {},
          complete: function(res) {},
        })


      }
    })
  }

})