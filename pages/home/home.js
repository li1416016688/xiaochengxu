// const App=getApp();
// const homename = App.globalData.name;

// console.log(homename);

// pages/home/home.js
//每个页面都有生命周期函数
Page({
  data: {
    message: 'hahaha',
    list: []
  },


  //监听页面的生命周期

  onLoad() {
    //页面加载
    console.log("onLoad");
    // wx.request({
    //   //域名在控制台配置
    //   url:'https://api.apiopen.top/musicBroadcastingDetails?channelname=public_tuijian_spring',
    //   success:(res)=>{
    //     console.log(res);
    //     // const data= res.data.data.list;
    //     // this.setData({
    //     //   list : data
    //     // })
    //   }
    // })
  },
  onReady() {
    //初次渲染完成时
    console.log("onReady");

  },
  onShow() {
    // 页面显示
    console.log("onShow");

  },
  onHide() {

    console.log("onHide");

  },
  onUnload() {
    //页面跳转
    console.log("onUnload");

  },
  //监听wxml相关的一些事件
  handleGetUserInfo(event) {
    console.log(event);
  },
  viewhand() {
    console.log("hahaa被电击;");

  },
  //监听页面的滚动
  onPageScrdll(obj) {
    console.log(obj);
    // console.log("滚动");
  },
  //监听页面是否滚动到顶部
  onReachBottom(){
    console.log("页面顶部");

  },
    //下拉刷新

  onPullDownRefresh() {
    console.log("页面刷新");

  }

})