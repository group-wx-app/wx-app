// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
    if (app.globalData.userInfo){
      wx.navigateTo({url:'../user/user'})
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app.globalData.userInfo)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  usernameInput:function(e){
    console.log(e)
    if(e.detail.cursor<10){
      this.setData({ username: e.detail.value })
    }else{
      wx.showToast({
        title: '用户名不能超过9位',
        duration: 1000
      })
    }
    
  },
  passwordInput: function (e) {
    console.log(e)
    if (e.detail.cursor < 19) {
      this.setData({ password: e.detail.value })
    } else {
      wx.showToast({
        title: '密码不能超过18位',
        duration: 1000
      })
    }
  },
  // 用户登录
  loginClik: function(){
    if(!this.data.username){
      wx.showToast({
        title: '用户名不能为空',
        icon: '',
        duration: 1000
      })
    }else if(!this.data.password){
      wx.showToast({
        title: '密码不能为空',
        duration: 1000
      })
    }else{
      app.globalData.userInfo = this.data.username;
      wx.switchTab({ url: '../user/user'})
    }
  }
})