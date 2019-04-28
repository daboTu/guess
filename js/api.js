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
const giftorder = (data) => {
return request({
  url: '/gift/giftOrder',
  method: 'p0st',
  data
})
}

export default {
  login,
  register,
  giftList,
  giftInfo
}