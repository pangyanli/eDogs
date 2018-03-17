/* 使用mockjs提供数据接口 */

import Mock from 'mockjs'
import homeDate from './homepage.json'

// 向外提供首页home的数据
Mock.mock('/home_data', {code: 0 , data: homeDate})  // code:0标识成功的返回
