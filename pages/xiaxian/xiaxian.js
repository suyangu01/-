// pages/huiyuanzhong/huiyuanzhong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '-1',
    nums: '-1'
  },
  show: function (e) {

    console.log(1)
    if (this.data.num != e.currentTarget.id) {
      this.setData({
        num: e.currentTarget.id
      })
    } else {
      this.setData({
        num: -1
      })
    }
    this.setData({
      nums: -1
    })
  },
  san: function (e) {
    console.log(2)
    if (this.data.nums != e.currentTarget.id) {
      this.setData({
        nums: e.currentTarget.id
      })
    } else {
      this.setData({
        nums: -1
      })
    }
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