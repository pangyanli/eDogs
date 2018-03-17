
import {RECEIVE_HOME_DATA} from './mutation-types'

export default {
  // 接收首页的数据
  [RECEIVE_HOME_DATA](state,{homeData}){
    state.homeData = homeData
  }
}

