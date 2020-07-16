// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  binput(event) {
    console.log("键盘输入时触发:" , event);
    console.log("键盘输入时触发:", event.detail.value);

  },
  bfocus(event) {
    console.log("输入框聚焦时触发:" , event);
  },
  bblur(event) {
    console.log("输入框失去焦点时触发:" , event);
  },
  bconfirm(event) {
    console.log("点击完成按钮时触发:" , event);
  },
})