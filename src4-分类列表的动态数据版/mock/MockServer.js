/* 使用mockjs提供数据接口 */

import Mock from 'mockjs'
import homeData from './homepage.json'
import categorysData from './categorys.json'

// 1、向外提供首页home的数据
Mock.mock('/home_data', {code: 0 , data: homeData})  // code:0标识成功的返回

// 2、向外暴露categorys分类页的数据
Mock.mock('/categorys', {code:0, data:categorysData.categorys})

// 3、向外暴露品牌brand页的数据
Mock.mock('/brand', {code:0, data: categorysData.brand})
