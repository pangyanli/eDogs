
import {
  reqHomeData,
  reqCategorys,
  reqBrand
} from '../api/index'
import {
  RECEIVE_HOME_DATA,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECORD_USER_INFO
} from './mutation-types'

export default {
  // 1、异步获取首页的数据
  async getHomeData({commit}, callback){
    let result = await reqHomeData()
    commit(RECEIVE_HOME_DATA, {homeData: result.data})
    callback && callback()
  },
  // 2、异步获取分类列表categorys数据
  async getCategorys({commit},callback){
    let result = await reqCategorys()
    commit(RECEIVE_CATEGORYS,{categorys:result.data})
    callback && callback()
  },
  // 3、异步获取品牌brand数据
  async getBrand({commit},callback){
    let result = await reqBrand()
    commit(RECEIVE_BRAND,{brand:result.data})
    callback && callback()
  },
  // 保存用户输入的信息到state中
  recordUserInfo({commit},{userInfo}){
    commit(RECORD_USER_INFO,{userInfo})
  }
}



