// pages/giftinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    remark:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    wx.$ajax.giftInfo({
      giftId: options.id
    }).then(r => {
      this.setData({
        info:r.data
      })
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 立即兑换
  exchange() {
    let _this =this
    console.log(_this)
    wx.showModal({
      title: '兑换提示',
      content: '确定要兑换这个礼品吗？',
      success(res) {
        if (res.confirm) {
          wx.$ajax.giftorder({
            giftId: _this.data.info.giftPo.id,
            mobile: _this.data.info.giftOrderPo.mobile,
            name: _this.data.info.giftOrderPo.name,
            address: _this.data.info.giftOrderPo.address,
            remark: _this.data.remark
          }).then(r=>{
            // console.log()
            wx.showToast({
              title: r.message,
              duration: 2000
            })
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  namefn(e){
    let num = e.target.dataset.num
    var item = '';
    if (num==1){
      item = 'info.giftOrderPo.name'
    } else if (num == 2){
      item = 'info.giftOrderPo.mobile'
    } else if (num == 3) {
      item = 'info.giftOrderPo.address'
    } else if (num == 4) {
      item = 'remark'
    }
    this.setData({
      [item]:e.detail.value
    })
    console.log(this.data.info)
  }
})