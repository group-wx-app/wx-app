//index.js
//获取应用实例
const app = getApp()
console.log(app)
// 导入公共动画JS
const animates = require('../../libs/animate.js');
console.log(animates.creatAnimat())
Page({
  data: {
    motto: 'Hello World',
    viewnews: '新闻列表',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData: {}
  },
  //事件处理函数
  bindViewTap: function() {
    // 非tabBar的页面navigateTo才能跳转，wx.navigateTo/wx.redirectTo只能用在非tabBar页面的跳转，要跳转到tabBar页面，需要使用wx.switchTab
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  viewNews: function () {
    wx.switchTab({
      url: '../news/news'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    console.log('onshow')
    console.log(this.data.animationData)
    if (this.data.animationData.actions){
      this.setData({
        animationData: animates.creatAnimat()
      })
    }
    
    // var animation = wx.createAnimation({
    //   transformOrigin: "50% 50%",
    //   duration: 10000,
    //   timingFunction: "ease",
    //   delay: 1000
    // })
    // this.animation = animation
    // animation.scale(2).rotate(45).step()

    // this.setData({
    //   animationData: animation.export()
    // })
  },
  onHide: function () {
    console.log('onhide')
    this.setData({
      animationData: animates.restAnimat()
    })
  },
  onReady:function(){
    console.log('onready')
    this.setData({
      animationData: animates.creatAnimat()
    })
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 创建动画
  animateBtn:function(){
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 5000,
      timingFunction: "ease",
      delay: 300
    })
    animation.scale(1).rotate(-360).step()
    animation.scale(2).translateX(-50).step()
    animation.scale(1).translateX(0).step()
    animation.scale(2).translateX(50).step()
    animation.scale(1).translateX(0).step()
    this.setData({
      animationData: animation.export()
    })
  }
})
