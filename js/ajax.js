//ajax封装
let md5 = require('./lib/MD5.js').hexMD5
// const urlPublic = 'http://zw.free.idcfengye.com/guess';
const urlPublic = 'http://47.75.142.249:8081/guess';
// const urlPublic = 'http://192.168.0.91:8081/guess'

let $ajax = function(obj) {
  let data = obj.data;
  let url = obj.url;
  let method = obj.method;
  let value = ''

  try {
    value = wx.getStorageSync('id')
    if (value) {
      data.memberId = value
    }
  } catch (e) {}
  // data.Token = md5(md5('meihua_shenting') + parseInt((new Date().getTime()) / 1000) + md5('xiaoyYdS'));
  // data.Time = parseInt((new Date().getTime()) / 1000);
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: urlPublic + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function(res) {
        resolve(res.data)
        wx.hideLoading()
      },
      fail: function(err) {
        console.warn('网络请求失败')
        wx.showToast({
          title: '网络请求失败',
          image:'../../images/error.png',
          duration: 2000
        })
        wx.hideLoading()
        reject(err)
      }
    })
  })
}
export default $ajax;