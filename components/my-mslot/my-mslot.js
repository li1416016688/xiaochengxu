// components/my-mslot/my-mslot.js
Component({
  // 定义组件的配置选项
  // multipleSlots多插槽
  //styleIsolation:设置样式的隔离方式
  options: {
    multipleSlots: true
  },
// 外界给组件传入额外的样式
externalClasses:[],
// 可以监听properties/data的改变
  observers:{
    counter:function(newVal){
// 没有oldVal
    }
  },
  // 组件中监听生命周期函数
  //1、监听所在页面的生命周期
pageLifetimes:{
  show(){
    console.log("监听组件所在页面显示出来时")
  },
  hide(){
    console.log("监听组件所在页面隐藏起来时")
  },
  resize(){
    console.log("尺寸发生改变")
  }

},

  // 2、监听组件本身的生命周期
lefetimes:{
created(){
console.log("被创建");
},
attached(){
  console.log("组件被添加到页面");
},
ready(){
  console.log("组件被渲染出来");
},
moved(){
  console.log("组件被移动到另一个节点")
},
dettached(){
  console.log("组件被移除");
}

},
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: 'haha',
      observer:function(newVal,oldVal){

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    foo(){

    }
  }
})