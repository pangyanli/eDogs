/**
 * Created by h on 2018/3/16.
 */

//1、请求头部menus的数据
export const reqMenus = () => ajax('/menus')
// 2、请求第一个轮播dog_banner的数据
export const reqDogDanner = () => ajax('/dog_banner')
// 3、请求315大狗dog_img的数据
export const reqDogImg = () => ajax('/dog_img')
// 4、请求导航nav_list的数据
export const reqNavList = () => ajax('/nav_list')
// 5、请求秒杀miaosha的数据
export const reqMiaosha = () => ajax('/miaosha')
// 6、请求每日疯抢surprise的数据
export const reqsSurprise = () => ajax('/surprise')
// 7、请求品牌力量brand_power的数据
export const reqBrandPower = () => ajax('/brand_power')
// 8、请求gif图片的数据
export const reqGif = () => ajax('/gif')
// 9、请求vip图片的数据
export const reqVip = () => ajax('/vip')
// 10、请求爱宠服务图片vip_services的数据
export const reqVipServices = () => ajax('/vip_services')
// 11、请求大牌团购dapaituan的数据
export const reqDapaituan = () => ajax('/dapaituan')
// 12、请求特价轮播tejia_baner的数据
export const reqTejiaBaner = () => ajax('/tejia_baner')
// 13、请求好货haohuo的数据
export const reqHaohuo = () => ajax('/haohuo')
// 14、请求好货列表haohuo_list的数据
export const reqHaohuoList = () => ajax('/haohuo_list')
// 15、请求最惨奖zuican的数据
export const reqZuican = () => ajax('/zuican')
// 16、请求留言区zuican_content的数据
export const reqZuicanContent = () => ajax('/zuican_content')
// 17、请求特别星球special的数据
export const reqSpecial = () => ajax('/special')
// 18、请求特别星期列表special_list的数据
export const reqSpecialList= () => ajax('/special_list')
// 19、请求栏目lanmu的数据
export const reqLanmu = () => ajax('/lanmu')
// 20、请求栏目列表lanmu_lis的数据
export const reqLanmuLis = () => ajax('/lanmu_lis')






import Mock from 'mockjs'
import homeData from './homepage.json'

//1、向外提供头部menus的数据
Mock.mock('/menus', {code:0, data:homeData.menus})

// 2、向外提供第一个轮播dog_banner的数据
Mock.mock('/dog_banner', {code:0, data:homeData.dog_banner})

// 3、向外提供315大狗dog_img的数据
Mock.mock('/dog_img', {code:0, data:homeData.dog_img})

// 4、向外提供导航nav_list的数据
Mock.mock('/nav_list', {code:0, data:homeData.nav_list})

// 5、向外提秒杀miaosha的数据
Mock.mock('/miaosha', {code:0, data:homeData.miaosha})

// 6、向外提供每日疯抢surprise的数据
Mock.mock('/surprise', {code:0, data:homeData.surprise})

// 7、向外提供品牌力量brand_power的数据
Mock.mock('/brand_power', {code:0, data:homeData.brand_power})

// 8、向外提供gif图片的数据
Mock.mock('/gif', {code:0, data:homeData.gif})

// 9、向外提供vip图片的数据
Mock.mock('/vip', {code:0, data:homeData.vip})

// 10、向外提供爱宠服务图片vip_services的数据
Mock.mock('/vip_services', {code:0, data:homeData.vip_services})

// 11、向外提供大牌团购dapaituan的数据
Mock.mock('/dapaituan', {code:0, data:homeData.dapaituan})

// 12、向外提供特价轮播tejia_baner的数据
Mock.mock('/tejia_baner', {code:0, data:homeData.tejia_baner})

// 13、向外提供好货haohuo的数据
Mock.mock('/haohuo', {code:0, data:homeData.haohuo})

// 14、向外提供好货列表haohuo_list的数据
Mock.mock('/haohuo_list', {code:0, data:homeData.haohuo_list})

// 15、向外提供最惨奖zuican的数据
Mock.mock('/zuican', {code:0, data:homeData.zuican})

// 16、向外提供留言区zuican_content的数据
Mock.mock('/zuican_content', {code:0, data:homeData.zuican_content})

// 17、向外提供特别星球special的数据
Mock.mock('/special', {code:0, data:homeData.special})

// 18、向外提供特别星期列表special_list的数据
Mock.mock('/special_list', {code:0, data:homeData.special_list})

// 19、向外提供栏目lanmu的数据
Mock.mock('/lanmu', {code:0, data:homeData.lanmu})

// 20、向外提供栏目列表lanmu_lis的数据
Mock.mock('/lanmu_lis', {code:0, data:homeData.lanmu_lis})
