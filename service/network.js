import{
  BaseUrl
} from './config.js' 
export default function(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: BaseUrl+ options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
  })
  })
}