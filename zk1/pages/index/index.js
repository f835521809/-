//index.js
//获取应用实例
const app = getApp()
Page({
  //事件处理函数
  bindViewTap: function() {   //点击进入预约页面
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  taptwo: function () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
})
