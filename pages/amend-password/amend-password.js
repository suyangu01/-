// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {}, // 表单数据
    select: true,
  },

  setSelect() {
    this.setData({
      select: !this.data.select
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  input(e) {
    let input = e.currentTarget.dataset.input;
    let value = e.detail.value;
    let form = this.data.form;
    form[input] = value;
    this.setData({ form });
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