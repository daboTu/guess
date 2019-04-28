//app.js
import api from './js/api.js'
// import api from './js/ajax.js'
App({
  onLaunch: function () {
    wx.$ajax = api;
    var userinfo =[]
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  }
})