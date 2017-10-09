// 创建动画
const creatAnimat = data => {
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 3000,
      timingFunction: "ease",
      delay: 100
    })
    animation.scale(2).rotate(360).step()
    return animation.export();
    this.setData({
      animationData: animation.export()
    })
}
// 恢复动画
const restAnimat = data => {
  var animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 300,
    timingFunction: "ease",
    delay: 100
  })
  animation.scale(1).rotate(0).step()
  return animation.export();
  this.setData({
    animationData: animation.export()
  })
}

module.exports = {
  creatAnimat: creatAnimat,
  restAnimat: restAnimat
}