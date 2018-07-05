// pages/my-order/my-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs: [
      "全部",
      "待付款",
      "待发货",
      "待收货",
      "待评价"
    ],
    commoditys: [
      {
        state: "等待买家付款",
        image: '/static/images/commodity.png',
        title: "猫爪棉花糖咖啡伴侣软糖儿童小零食",
        genre: "有趣味",
        price: '27.90',
        quantity: "1"
      },
      {
        state: "等待卖家发货",
        image: '/static/images/commodity.png',
        title: "猫爪棉花糖咖啡伴侣软糖儿童小零食",
        genre: "有趣味",
        price: '27.90',
        quantity: "1"
      }
    ],
    currentTab: 0,
  },

  /**
   * 点击切换tab
   */

  selectedNav(e){
    this.setData({
      currentTab: e.currentTarget.dataset.index
    })
  },
  switchContent(e){
    console.log(e);
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