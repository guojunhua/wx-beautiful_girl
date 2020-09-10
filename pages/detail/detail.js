// pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noramalData: [{
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
      "CoverHeight": 467,
      "CoverWidth": 350
    },
    {
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
      "CoverHeight": 871,
      "CoverWidth": 672
    },
    {
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
      "CoverHeight": 871,
      "CoverWidth": 672
    },
    {
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
      "CoverHeight": 871,
      "CoverWidth": 672
    },
    {
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
      "CoverHeight": 871,
      "CoverWidth": 672
    },
    {
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
      "CoverHeight": 871,
      "CoverWidth": 672
    },
    {
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
      "CoverHeight": 871,
      "CoverWidth": 672
    },
    {
      "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
      "CoverHeight": 871,
      "CoverWidth": 672
    }
  ],

  detailList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var bannerData = that.data.banner;
  var allData = that.data.noramalData;
  var leftData = [];
  for (let i = 0; i < allData.length; i++) {
      leftData.push(allData[i]);
  }

  //更新左右两栏的数据以及累计高度
  that.setData({
    detailList: leftData,
  })
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