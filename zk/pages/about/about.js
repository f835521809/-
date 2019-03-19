// pages/index/index.js
Page({
  data: {
    username: 'ww',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindGetUserInfo: function (e) {
    wx.getSetting({
      success(res) {
        wx.showModal({
          title: '微信授权',
          content: '微信授权成功',
          showCancel: true,
          cancelText: '取消',
          cancelColor: '#000',
          confirmText: '确定',
          confirmColor: '#3cc51f',
          success: (result) => {
            if (result.confirm) {
              wx.switchTab({
                url: '../index/index',
              })
              wx.getUserInfo({
                success(res) {
                  wx.setStorageSync('userInfo', JSON.parse(res.rawData))
                }
              })
            } else {
              console.log('请确认授权成功')
            }
          },
          fail: () => {
            console.log('失败')
          }
        })
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