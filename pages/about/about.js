Page({
  data: {
    text: "Page location",
    latitude: 0,//纬度 
    longitude: 0,//经度 
    speed: 0,//速度 
  },
 
  /**
     * 监听定位到当前位置
     */
  openMap: function () {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        wx.openLocation({
          latitude: 36.715934,
          longitude: 117.050213,
          scale: 28,
          name: '山东哈轴通用轴承销售有限公司',
          address: '济南市天桥区历山北路198号',
        })
      }
  
    })
  },
  openPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '13606414648',
      success: function () {
        console.log("拨打电话成功！")
      }
    })
  }
})