const getRandom = function({nums=0,max=0,min=0}) {
  // 获取任意范围内的，的随机数，返回一个数组
  if (nums) {
    let temp = []
    let falg = true
    while(falg){
      let x = Math.floor(Math.random()*(max-min+1) + min)
      if((temp.indexOf(x)) === -1) {
        temp.push(x)
      }
      if (temp.length===nums) {
        falg = false
      }
    }
    return temp.sort((a,b) => {
      return a - b
    })
  } else {
    return
  }
}
const getArrMax = function (arr) {
  // 获取数组中最大值
  return Math.max.apply(null, arr)
}

const getArrMin = function (arr) {
  // 获取数组中最小值
  return Math.min.apply(null, arr)
}
const sortArrObj = function (arr, id) {
  // 数组对象按照某个属性进行排序
  if (!arr) {
    return
  }
  arr.sort((a, b) => {
    return a.id > b.id ? 1 : -1
  })
  return arr
}
const forMatTime = (time, mode) => {
  // 时间戳处理
  // mode接受两种格式y-m-d(年月日)和h-m-s(时分秒)
  if (typeof time !== 'string') {
    let unixtime = time
    let unixTimestamp = new Date(unixtime * 1000)
    let Y = ((unixTimestamp.getFullYear()) >= 10 ? (unixTimestamp.getFullYear()) : '0' + (unixTimestamp.getFullYear()))
    let M = ((unixTimestamp.getMonth() + 1) >= 10 ? (unixTimestamp.getMonth() + 1) : '0' + (unixTimestamp.getMonth() + 1))
    let D = (unixTimestamp.getDate() >= 10 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate())
    let H = (unixTimestamp.getHours() >= 10 ? unixTimestamp.getHours() : '0' + unixTimestamp.getHours())
    let m = (unixTimestamp.getMinutes() >= 10 ? unixTimestamp.getMinutes() : '0' + unixTimestamp.getMinutes())
    let s = (unixTimestamp.getSeconds() >= 10 ? unixTimestamp.getSeconds() : '0' + unixTimestamp.getSeconds())
    if (mode === 'y-m-d') {
      return `${Y}年${M}月${D}日`
    } else if (mode === 'h-m-s') {
      return `${H}:${m}:${s}`
    }
  }
}
const verificationAuthCode = function (AuthCode) {
  // 4位验证码验证
  let regExp = /^\d{4}$/
  return regExp.test(AuthCode)
}

const verificationPhone = function (phone) {
  // 手机号验证
  let regExp = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
  return regExp.test(phone)
}

const verificationPassWord = function (password) {
  // 密码验证6位字母或数字
  let regExp = /^[a-z0-9]{6,}$/i
  // console
  return regExp.test(password)
}
const getScroll = function () {
  // 获取页面被卷曲的高度
  return {
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  }
}

const scrollToTop = function () {
  // 使页面滚动到固定的位置
  let timer = setInterval(() => {
    let leader = 0
    let target = getScroll().top
    let speed = (target - leader) / 10
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
    leader = leader + speed
    scrollTo(0, target - leader)
    if (target === 0) {
      clearInterval(timer)
    }
  }, 0)
}

const getQueryString = function (name) {
  // 获取url参数
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),r = window.location.search.substr(1).match(reg)
  if (r !== null) {
  return unescape(r[2])
  }
  return null;
}

const urlEncode = (url, data) => {
  // 用来拼接get请求的时候的参数
  if (typeof (url) === 'undefined' || url === null || url === '') return ''
  if (typeof (data) === 'undefined' || data === null || typeof (data) !== 'object') return url
  url += (url.indexOf('?') !== -1) ? '' : '?'
  for (let k in data) {
    url += ((url.indexOf('=') !== -1) ? '&' : '') + k + '=' + encodeURI(data[k])
  }
  return url
}

const getCookie = function (name) {
  // 获取cookie
  let arr = []
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}

const setCookie = function (name, value) {
  // 设置cookie
  document.cookie = `${name} = ${value};path=/`
}

const createRandomStr = function (len) {
  // 生成任意长度的随机字符串
  let $chart = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let maxPos = $chart.length
  let tempStr = ''
  for (let i = 0; i < len; i++) {
    tempStr += $chart.charAt(Math.floor(Math.random() * maxPos))
  }
  return tempStr
}

module.exports = {
  getRandom,
  getArrMax,
  getArrMin,
  sortArrObj,
  forMatTime,
  verificationAuthCode,
  verificationPhone,
  verificationPassWord,
  scrollToTop,
  getQueryString,
  createRandomStr,
  urlEncode
}