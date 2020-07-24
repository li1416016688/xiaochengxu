// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    isshow:true,
  },
  handleuptshow(){
    this.setData({
      isshow:!this.data.isshow
    })
  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      count:this.data.count+1
    })
  },
  handletabclick(event){
    console.log(event)
  },
  handleupdate(){
    // 修改目的:修改my-sel中的counter
    // 1、获取组件对象
    // const my_sel=this.selectComponent('class/id')
    const my_sel = this.selectComponent('.sel-class');
    console.log(my_sel);
    // 2、通过setData修改组件中的数据(不合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter+1
    // })
    // 3、通过方法对数据进行修改
    my_sel.incrementCount(10)



  }
})