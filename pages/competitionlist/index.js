// pages/competitionlist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  listtoinfo() {
    wx.navigateTo({
      url: '/pages/competition/index',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})