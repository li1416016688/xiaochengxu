// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'
const Top_Dis = 100
const types = ['pop', 'new', 'sell']

Page({


  data: {
    bannars: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      'pop': {
        page: 0,
        list: []
      },
      'new': {
        page: 0,
        list: []
      },
      'sell': {
        page: 0,
        list: []
      }
    },
    currentType: 'pop',
    showbacktop: false,
    isTabFixed: false,
    tapScrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1.请求轮播图以及推荐数据
    this._getMultiData();
    this._getGoodsData('pop')
  },
  // -----网络请求的函数
  _getMultiData() {
    getMultiData().then(res => {
      console.log(res);
      // 2.取出数据
      const bannars = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      console.log('bannars', bannars);
      console.log('recommends', recommends);
      // 将数据放入data里面
      this.setData({
        bannars,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    // 获取页面
    const page = this.data.goods[type].page + 1;
    // 发送网络请求
    getGoodsData(type, page).then(res => {
      console.log('getMultiData', res);
      // 取值
      // const list=res.data.data.list;
      // 将数据设置到对应type的list中

      // this.data.goods[type].list.push(...list);

      // const oldlist=this.data.goods[type].list
      // oldlist.push(...list);
      //   const typeKey = 'goods.${type}.list';
      //   const pageKey = 'goods.${type}.page'

      // this.setData({
      //   [typeKey]:oldlist,
      //   [pageKey]: page

      // })
    })
  },
  // --------事件监听的函数
  handletabclick(event) {
    console.log(event);
    const index = event.detail.index;
    console.log(index);
    //设置currentType
    this.setData({

      currentType: types[index]
    })

  },
  onReachBottom() {
    console.log("底部");
    this._getGoodsData(this.data.currentType);


  },
  // 页面显示不意味图片加载完成,所以不准确
  // onShow() {
  //   wx: wx.createSelectorQuery().select('#tab-contral').boundingClientRect(rect => {
  //     console.log('rect', rect);

  //   }).exec()

  // },
  onPageScroll(options) {
    console.log('op', options);
    const scrollTop = options.scrollTop;
    //console.log('scrollTop', scrollTop);

    const flag = scrollTop >= Top_Dis;
    if (flag != this.data.showbacktop) {
      this.setData({

        showbacktop: flag
      })
    }
    // 
    const flag2=scrollTop>=this.data.tapScrollTop;

    if (flag2 != this.data.isTabFixed) {
      this.setData({

        isTabFixed: flag2
      })
    }
  },
  handleImageLoad() {
    wx: wx.createSelectorQuery().select('#tab-contral').boundingClientRect(rect => {
      console.log('rect', rect);
      this.data.tapScrollTop = rect.top;
    }).exec()
  }

})