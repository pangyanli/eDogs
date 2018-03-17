
import {reqHomeData} from '../api/index'
import {RECEIVE_HOME_DATA} from './mutation-types'

export default {
  // 1、获取首页的数据
  async getHomeData({commit}, callback){
    let result = await reqHomeData()
    commit(RECEIVE_HOME_DATA, {homeData: result.data})
    callback && callback()
  }
}



