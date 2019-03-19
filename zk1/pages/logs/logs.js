// pages/tapone/tapone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listdata: [{
      one: "03月14日",
      two: "今日关闭",
      id: 0
    }, {
      one: "03月15日",
      two: "今日可以",
      id: 1
    }, {
      one: "03月16日",
      two: "今日关闭",
      id: 2
    }, {
      one: "03月17日",
      two: "今日关闭",
      id: 3
    }, {
      one: "03月18日",
      two: "今日关闭",
      id: 4
    }, {
      one: "03月19日",
      two: "今日关闭",
      id: 5
    }, {
      one: "03月20日",
      two: "今日关闭",
      id: 6
    }, {
      one: "03月21日",
      two: "今日关闭",
      id: 7
    }],
    enrolledData: [{
      times: "8:00-10:00",
      id: 0
    }, {
      times: "11:00-13:00",
      id: 1
    }, {
      times: "14:00-16:00",
      id: 2
    }, {
      times: "17:00-19:00",
      id: 3
    }],
    id: null,
    enrolledid: null,
    flag: false
  },
  yuyue: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  check: function (e) {
    let ids = e.currentTarget.dataset.id;
    this.setData({
      id: ids
    })
    let { listdata, id, flag } = this.data;
    let detail = listdata.filter((x, y) => {
      return x.id == ids;
    })
    detail.map((x, y) => {
      if (x.two === '今日可以') {
        this.setData({
          flag: true
        })
      } else {
        this.setData({
          flag: false
        })
      }
    })
    
    wx.setStorage({
      key: "new",
      data: detail
    })
  },
  enrolledcheck: function (e) {
    let ids = e.currentTarget.dataset.enrolledid;
    this.setData({
      enrolledid: ids
    })

    let { enrolledData, enrolledid } = this.data;
    let enrolledDatas = enrolledData.filter((x, y) => {
      return x.id == ids;
    })

    wx.setStorage({
      key: "enrolledData",
      data: enrolledDatas
    })
  },
})