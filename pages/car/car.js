// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityList:[
      {
        image:"/static/images/commodity.png",
        title:"壁挂纯水机NS-B6-75C6",
        genre:"有趣味",
        price: "29.90",
        icon: "/static/images/checked_b.png",
        select: 0
      }
    ],
    quantity: 1,
    popup: false,
  },

  /**
   * 弹出窗口
   */
  showClick(e) {
    this.setData({
      popup: !this.data.popup
    })
  },
  hiddenClick() {
    this.setData({
      popup: !this.data.popup
    })
  },


  /**
   * 点击更改数量
   */
  subtractClick(){
    let num = this.data.quantity;
    // console.log(num);
    if(num > 1){
      num--;
    }
    this.setData({
      quantity: num
    })
  },

  addClick(){
    let num = this.data.quantity;
    num++;
    this.setData({
      quantity: num
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