// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'rose',
    age:13,
    stus:[
      {id:1,name:'lis',age:20},
      { id: 2, name: 'js', age: 10 },
      { id: 3, name: 'css', age: 29 },
      { id: 4, name: 'qs', age: 32 }

    ],
    counter:0

  },
  handleBtnClick(){
    // 界面不刷新
    // this.data.counter+=1;
    // console.log(this.data.counter)

    //this.setData()
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleBtnClickSub(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
  
})