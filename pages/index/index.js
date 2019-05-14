//index.js
//获取应用实例

const app = getApp()
Page({
  data: {
    userinfo: {},
    isSignIn: false,
    dataVal: [{
        title: '股票猜涨跌',
        icon: 'fa-area-chart'
      },
      {
        title: '数字竞猜',
        icon: 'fa-bell'
      },
      {
        title: '股票猜涨跌',
        icon: 'fa-area-chart'
      },
      {
        title: '股票猜涨跌',
        icon: 'fa-area-chart'
      }
    ],
    swiperIndex: 0,
    pageBackgroundColor: [{
        bgc: "#44cef6",
        color: '#fff'
      },
      {
        bgc: "#f36838",
        color: '#fff'
      },
      {
        bgc: "#e9e7ef",
        color: '#ff4c00'
      },
      {
        bgc: "#ff2d51",
        color: '#fff'
      },
      {
        bgc: "#2e4e7e",
        color: ''
      },
      {
        bgc: "#4a4266",
        color: ''
      },
      {
        bgc: "#fff143",
        color: ''
      },
      {
        bgc: "#ffb61e",
        color: ''
      },
      {
        bgc: "#fff2df",
        color: ''
      },
      {
        bgc: "#e9e7ef",
        color: ''
      },
      {
        bgc: "#bce672",
        color: ''
      },
    ]
  },
  onShow: function() {
    // wx.$Toast({
    //   content: '成功的提示',
    //   type: 'success'
    // })
  },
  swiperChange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    wx.$ajax.share({}).then((res) => {
      if (res.code == 0) {
        wx.showToast({
          title: res.message,
          image: '../../images/error.png',
          duration: 2000
        })
        let item2 = 'userinfo.userPo.integral'
        this.setData({
          [item2]: res.data
        })
      } else {
        wx.showToast({
          title: res.message,
          image: '../../images/error.png',
          duration: 2000
        })
      }
    })
  },
  onLoad: function(options) {
    wx.showShareMenu({
      withShareTicket: true
    })
    // 获取用户信息
    wx.getSetting({ //查询是否授权登录过
      success: scope => {
        if (scope.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框        
          wx.login({
            success: res => {
              if (res.code) {
                wx.$ajax.login({
                  code: res.code
                }).then((res) => {
                  console.log(res, 11111)
                  if (res.code == 0) {
                    wx.setStorageSync('id', res.data.userPo.id)
                    this.setData({
                      userinfo: res.data
                    })
                    // try {
                    //   const value = wx.getStorageSync('id')
                    //   if (value) {
                    //     console.log(value, 'value')
                    //   }
                    // } catch (e) {
                    // }
                  } else {
                    // console.log('登录失败')
                    wx.getUserInfo({
                      success: es => {
                        console.log(es)
                        var info = JSON.parse(es.rawData)
                        wx.$ajax.register({
                          openId: res.data,
                          nickName: info.nickName,
                          photo: info.avatarUrl,
                          province: info.province,
                          city: info.city,
                          sex: info.gender
                        }).then((res) => {
                          wx.setStorageSync('id', res.data.id)
                          this.setData({
                            userinfo: res.data
                          })
                        })
                      }
                    })
                  }
                })
              }
            }
          })
        } else {
          wx.navigateTo({
            url: '/pages/authorization/index'
          })
        }
      }
    })
  },
  toGift() {
    wx.navigateTo({
      url: '/pages/gift/index'
    })
  },
  toinfo() {
    wx.navigateTo({
      url: '/pages/userinfo/index',
    })
  },
  listtoinfo(){
    wx.navigateTo({
      url: '/pages/competition/index',
    })
  },
  // 签到 和 关闭
  signInFun(e) {
    let item = 'userinfo.sign'
    if (e.currentTarget.dataset.c == 0) {
      wx.$ajax.sign({}).then((res) => {
        console.log(res)
        if (res.code == 0) {
          wx.showToast({
            title: res.message,
            duration: 2000
          })
          let item2 = 'userinfo.userPo.integral'
          this.setData({
            [item]: 1,
            [item2]: res.data
          })
        } else {}
      })
    } else if (e.currentTarget.dataset.c == 1) {
      // 弹出签到
      this.setData({
        [item]: 0,
      })
    } else if (e.currentTarget.dataset.c == 2) {
      // 直接关闭
      this.setData({
        [item]: 1,
      })
    }

  }
})