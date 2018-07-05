// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myLogoUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1460664032,897051658&fm=27&gp=0.jpg",
    btns: [{
        icon: "/static/images/btn-icon.png",
        text: "全部订单"
      },
      {
        icon: "/static/images/btn-icon.png",
        text: "待付款"
      }, {
        icon: "/static/images/btn-icon.png",
        text: "待发货"
      }, {
        icon: "/static/images/btn-icon.png",
        text: "待收货"
      }, {
        icon: "/static/images/btn-icon.png",
        text: "待评价"
      },
    ],
    lists: [{
        icon: "/static/images/btn-icon.png",
        text: "会员中心",
        iconR: "/static/images/list-icon-r.png"
      },
      {
        icon: "/static/images/btn-icon.png",
        text: "我的收藏",
        iconR: "/static/images/list-icon-r.png"
      },
      {
        icon: "/static/images/btn-icon.png",
        text: "地址管理",
        iconR: "/static/images/list-icon-r.png"
      },
      {
        icon: "/static/images/btn-icon.png",
        text: "分销人员专区",
        iconR: "/static/images/list-icon-r.png"
      },
      {
        icon: "/static/images/btn-icon.png",
        text: "售后客服",
        iconR: "/static/images/list-icon-r.png"
      },
      {
        icon: "/static/images/btn-icon.png",
        text: "关于我们",
        iconR: "/static/images/list-icon-r.png"
      },
    ]
  },

  switchOrder(){
    wx.navigateTo({
      url: '/pages/my-order/my-order'
    })
  },
  switchHuiYuan(){
    wx.navigateTo({
      url: '/pages/huiyuanzhong/huiyuanzhong'
    })
  },
  switchCollect() {
    wx.navigateTo({
      url: '/pages/collect/collect'
    })
  },
  switchXiaXian() {
    wx.navigateTo({
      url: '/pages/xiaxian/xiaxian'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})