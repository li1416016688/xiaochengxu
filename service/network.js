// export default function request(options){
// wx:wx.request({
//   url: options.url,
//   data: options.data||'',
//   method: options.method||'GET',
//   dataType: 'json',
//   responseType: 'text',
//   success: function(res) {
//     resolve(res);
//   },
//   fail: function(err) {
//     reject(err)
//   },
//   complete: function(com) {},
// })

// }
export default function request(options) {
  wx: wx.request({
    url: options.url,
    data: options.data || '',
    method: options.method || 'GET',
    dataType: 'json',
    responseType: 'text',
    success: resolve,
    fail:reject,
    
  })

}