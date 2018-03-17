
import {
  reqHomeData,
  reqCategorys,
  reqBrand
} from '../api/index'
import {
  RECEIVE_HOME_DATA,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND
} from './mutation-types'

export default {
  // 1、异步获取首页的数据
  async getHomeData({commit}, callback){
    let result = await reqHomeData()
    commit(RECEIVE_HOME_DATA, {homeData: result.data})
    callback && callback()
  },
  // 2、异步获取分类列表categorys数据
  async getCategorys(commit){
    let result = await reqCategorys()
    commit(RECEIVE_CATEGORYS,{categorys:result.data})
  },
  // 3、异步获取品牌brand数据
  async getBrand(commit){
    let result = await reqBrand()
    commit(RECEIVE_BRAND,{brand:result.data})
  }
}



