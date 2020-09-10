//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
      banner: [
        {
          "id": 0,
          "link": "",
          "image_url": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
        },
        {
          "id": 1,
          "link": "",
          "image_url": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
        },
        {
          "id": 2,
          "link": "",
          "image_url": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
        },
        {
          "id": 3,
          "link": "",
          "image_url": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
        }
      ],
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
  
    leftList: [],
    rightList: [],
    leftHight: 0,
    rightHight: 0
    }, onPullDownRefresh() {
      // 增加下拉刷新数据的功能
      var self = this;
  },
  onLoad: function (options) {
    var that = this;
    var bannerData = that.data.banner;
  var allData = that.data.noramalData;
  //定义两个临时的变量来记录左右两栏的高度，避免频繁调用setData方法
  var leftH = that.data.leftHight;
  var rightH = that.data.rightHight;
  var leftData = [];
  var rightData = [];
  for (let i = 0; i < allData.length; i++) {
    var currentItemHeight = parseInt(Math.round(allData[i].CoverHeight * 345 / allData[i].CoverWidth));
    allData[i].CoverHeight = currentItemHeight + "rpx";//因为xml文件中直接引用的该值作为高度，所以添加对应单位
    if (leftH == rightH || leftH < rightH) {//判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
      leftData.push(allData[i]);
      leftH += currentItemHeight;
    } else {
      rightData.push(allData[i]);
      rightH += currentItemHeight;
    }
  }

  //更新左右两栏的数据以及累计高度
  that.setData({
    leftHight: leftH,
    rightHight: rightH,
    leftList: leftData,
    rightList: rightData,
    banner: bannerData
  })

  },
  onReady: function () {
      // 页面渲染完成
  },
  onShow: function () {
      // 页面显示
  },
  onHide: function () {
      // 页面隐藏
  },
  onUnload: function () {
      // 页面关闭
  },
  detail: function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})
