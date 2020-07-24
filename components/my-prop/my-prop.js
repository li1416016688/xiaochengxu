// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   // title:String
    title:{
      type:String,
      value:'默认',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal);
      }
    }
  },
  externalClasses: ['titleclass']
  
})
