// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']
  },
  clickbtn(){
    console.log('按钮点击');
  },
  handleTouchStart(){
    console.log('handleTouchStart');
  },
  handleTouchmove(){
    console.log('handleTouchmove');
  },
  handleTouchend(){
    console.log('handleTouchend');
  },
  handleTouchtap(){
    console.log('handleTouchtap');
  },
  handleLongpress(){
    console.log('handleLongpress点击时间长再松开');
  },
  handleEventClick(event){
    console.log('-----',event);
  },
  handleEventEnd(event){
    console.log('---event--', event);
  },
  handleInner(event){
    console.log('---Inner--', event);

  },
  handleouter(event) {
    console.log('---outer--', event);

  },
  handleitem(event){
    console.log('-----', event);
   const dataset =  event.currentTarget.dataset;
    console.log('--dataset---', dataset);
  },
  // 事件冒泡和事件捕获
  handleCaptuerView1(){
    console.log('handleCaptuerView1');
  },
  handleCaptuerView2() {
    console.log('handleCaptuerView2');
  },
  handleCaptuerView3() {
    console.log('handleCaptuerView3');
  },
  handleBindView1(){
    console.log('handleBindView1');
  },
  handleBindView2() {
    console.log('handleBindView2');
  },
  handleBindView3() {
    console.log('handleBindView3');
  }
  
})