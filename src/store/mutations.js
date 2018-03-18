
import {
  RECEIVE_HOME_DATA,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECORD_USER_INFO
} from './mutation-types'

export default {
  // 1、接收首页的数据
  [RECEIVE_HOME_DATA](state,{homeData}){
    state.homeData = homeData
  },
  // 2、接收分类列表categorys的数据
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  // 3、接收品牌brand的数据
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  //保存用户信息
  [RECORD_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  }
}

