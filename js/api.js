import request from './ajax.js'
// 登录
const login = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 注册
const register = (data) => {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
// 礼品列表
const giftList = (data) => {
  return request({
    url: '/gift/getGiftList',
    method: 'post',
    data
  })
}
// 礼品详情信息
const giftInfo = (data) => {
  return request({
    url: '/gift/orderCfg',
    method: 'post',
    data
  })
}
// 兑换
const giftorder = (data) => {
  return request({
    url: '/gift/giftOrder',
    method: 'post',
    data
  })
}
// 兑换记录
const myGiftOrder = (data) => {
  return request({
    url: '/user/myGiftOrder',
    method: 'post',
    data
  })
}
// 积分记录
const integralNotes = (data) => {
  return request({
    url: '/user/integralNotes',
    method: 'post',
    data
  })
}
// 签到
const sign = (data) => {
  return request({
    url: '/user/sign',
    method: 'post',
    data
  })
}
// 分享
const share = (data) => {
  return request({
    url: '/user/share',
    method: 'post',
    data
  })
}

export default {
  login,
  register,
  giftList,
  giftorder,
  myGiftOrder,
  integralNotes,
  sign,
  share,
  giftInfo
}