const app = getApp();
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[
      { name: 'name1', age: 12 },
      { name: 'name2', age: 14 },
      { name: 'name3', age: 16 },
      { name: 'name4', age: 18 }
    ],
    selectArry:['请选择','中国','美国','德国','意大利'],
    selectobjArry:[
      {
        id:0,name:'请选择'
      },
      {
        id:1,name:'中国'
      },
      {
        id:2,name:'美国'
      },
      {
        id:3,name:'德国'
      },
      {
        id:4,name:'意大利'
      }
    ],
    index: 0,
    // date: '2016-09-01',
    // date: util.formatTime(Date.now()),
    // 使用自定义日期格式
    date: util.formatTime2(new Date()),
    time: '12:01',
    // 地区选择器数据
    region: ['四川省', '成都市', '高新区'],
    // 多列选择器数据
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ], [
        {
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ], [
        {
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    multiIndex: [0, 0, 0],

    // swiper数据
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    // moeve数据
    movex: 0,
    movey: 0,

    // 图片路径
    imgSrc:'',

    // 获取AccessToken数据
    AccessToken:'',
    // 获取访问者数据
    VistorTotle: '',

    // 获取用户的openid数据
    userOpenId:'',

    // 扫描二维码返回数据
    getCoderes:'',

    // 罗盘数据
    getCompass:'',

    // 检测所支持的生物认证
    SupportSoter: ''
  },
  // 普通选择器
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 时间方法
  bindTimeChange: function (e) {
    console.log('Time发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  // 日期方法
  bindDateChange: function (e) {
    console.log('Time发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 地区选择方法
  bindRegionChange: function (e) {
    console.log('Region发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  // 多列方法
  bindMultiPickerChange: function (e) {
    console.log('MultiPicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },

  // swiper方法
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  // move方法
  movetap: function (e) {
    this.setData({
      movex: 30,
      mvoey: 30
    });
  },
  // 选择图片
  chooseImg: function(){
    let _self=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        _self.setData({imgSrc : tempFilePaths})
        // 获取图片信息aa126ba1b023047cdaa4f9015ea033b2 wx25bcadab6332cd52
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
          }
        })
        console.log(this)
      }
    });
  },

  // 获取access_token方法
  getAccessToken:function(){
    let _self=this;
    let url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6296be73fc0c52ba&secret=b09067219a46135ae0759d43faf90016',data={};
    app.userRequest(url,data,'GET',function(res){
      console.log(res)
      console.log(_self)
      _self.setData({ AccessToken: res.data.access_token})
    })
  },
  // 获取access_token方法
  getVistorTotle: function () {
    let _self = this;
    console.log(this)
    let url = 'https://api.weixin.qq.com/datacube/getweanalysisappiddailysummarytrend?access_token=' + this.data.AccessToken, data = { "begin_date": "20170928", "end_date": "20170928"};
    app.userRequest(url, data,'POST', function (res) {
      console.log(res)
      _self.setData({ VistorTotle: res.list })
    })
  },

  // form方法
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let _self = this;
    // 获取Openid发送模板消息
    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx6296be73fc0c52ba&secret=b09067219a46135ae0759d43faf90016&js_code=' + app.globalData.code + '&grant_type=authorization_code', data = {};
    app.userRequest(url, data, 'POST', function (res) {
      console.log(res)
      _self.setData({ userOpenId: res.data.openid })
      _self.sendTpls(res.data.openid, e.detail.formId, e.detail.value);
    })
  },
  formReset: function () {
    console.log(app.globalData.userInfo)
    console.log('form发生了reset事件')
  },

  // 发送模板消息
  sendTpls:function(openid,formId,formValues){
    let _self=this;
    let url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + this.data.AccessToken;
    console.log(openid, formId, formValues)
    let data = {
      "touser": openid,
      "template_id": "IMkOebVI5BmdAarRcoshXvyC8mS0QMqf5BWRIdvmEY4",
      "page": "/pages/index/index",
      "form_id": formId,
      "data": {
        "keyword1": {
          "value": formValues.input+'您好',
          "color": "#173177"
        },
        "keyword2": {
          "value": _self.data.date+' '+_self.data.time,
          "color": "#173177"
        },
        "keyword3": {
          "value": formValues['radio-group'],
          "color": "#173177"
        },
        "keyword4": {
          "value": formValues.input2,
          "color": "#173177"
        }
      },
      "emphasis_keyword": "keyword1.DATA"
    };
    app.userRequest(url, data, 'POST', function (res) {
      console.log(res)
    })
  },
  // 获取openid
  getOpenId:function(){
    let _self=this;
    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx6296be73fc0c52ba&secret=b09067219a46135ae0759d43faf90016&js_code=' + app.globalData.code+'&grant_type=authorization_code',data={};
    app.userRequest(url,data,'POST',function(res){
      console.log(res)
      _self.setData({userOpenId:res.data.openid})
    })
  },

  // 获取位置
  clickgetLocation:function(){
    let self = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res)
        self.setData({ VistorTotle: res.latitude + ' ' + res.longitude})
      }
    })
  },

  // 在微信地图查看位置
  viewLocationInWx:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      },fail:function(err){
        console.log(err)
      }
    })
  },
  // 在微信地图choose位置
  chooseLocationInWx: function () {
    wx.chooseLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var name = res.name
        var address = res.address
        console.log(res)
        wx.openLocation({
          name: name,
          address: address,
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }, fail: function (err) {
        console.log(err)
      }
    })
  },
  // 扫描二维码
  openCode:function(){
    let self = this;
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
        self.setData({ getCoderes:res })
      }
    })
  },
  // 监听罗盘
  openCompass:function(){
    let self = this;
    wx.onCompassChange(function (res) {
      console.log(res.direction)
      self.setData({ getCompass: res.direction })
    })
    // wx.startCompass({
    //   success:function(res){
    //     console.log(res)
    //     self.setData({ getCompass: res})
    //   }
    // })
  },
  // 关闭罗盘监听
  closeCompass:function(){
    let self = this;
    wx.stopCompass({
      success: function (res) {
        console.log(res)
        self.setData({ getCompass: res })
      }
    })
  },

  // 检测生物认证
  checkIsSupportSoter:function(){
    let self = this;
    wx.checkIsSupportSoterAuthentication({
      success(res) {
        // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
        // res.supportMode = ['fingerPrint'] 只支持指纹识别
        // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
        console.log(res)
        self.setData({ SupportSoter: res.supportMode})
        if(res.supportMode){//如果支持生物认证
          wx.startSoterAuthentication({ // 开始生物认证
            requestAuthModes: ['fingerPrint'], //允许的生物鉴权方式，以数组的形式呈现。需要指纹识别，只需填入 'finerPrint‘
            challenge: '123456', //官方称为「挑战因子」，可以将请求特征码（订单号、请求编号等）放入，确认用户的是授权哪一个请求
            authContent: '请用指纹解锁',//在指纹识别的对话框中，向用户显示的提示信息
            success(res) {
              // 二次与本地校验签名（非必需）,但如果你的小程序需要更强的安全性（例如金融交易类的小程序），你还要确认指纹信息的真实性，以防有人以伪造数据的方式，破解指纹验证
              if (res.errCode == 0){
                console.log('token' + self.data.AccessToken, 'openid' + self.data.userOpenId)
                let url = 'https://api.weixin.qq.com/cgi-bin/soter/verify_signature?access_token=' + self.data.AccessToken, data = { "openid": self.data.userOpenId, "json_string": res.resultJSON, "json_signature": res.resultJSONSignature };//需要先获取accessToken和openId
                app.userRequest(url,data,'POST',function(res){
                  console.log(res)
                  if(res.data.is_ok){
                    console.log('OK')
                    wx.showToast({
                      title: '成功',
                      icon: 'success',
                      duration: 2000
                    })
                  }else{
                    console.log('ERR')
                    wx.showModal({
                      title: '提示',
                      content: '出现错误，是否重新认证？',
                      success: function (res) {
                        if (res.confirm) {
                          console.log('用户点击确定')
                          self.checkIsSupportSoter()

                        } else if (res.cancel) {
                          console.log('用户点击取消')
                        }
                      }
                    })
                  }
                })
              }
              // console.log(res)
            }, fail(err){
              console.log(err)
            }
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  }
})