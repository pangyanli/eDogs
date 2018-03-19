<template>
  <div class="home_wrap">
    <div class="header_advertising" v-if="showAdvertising">
      <div class="advertising">
        <span class="iconfont icon-close" @click="closeAdvertising"></span>
        <a href="javascript:;" class="advertising_link">
          <img src="./images/1app.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="home" :class="{on:!showAdvertising}">
      <!-- 首页头部 -->
      <header  class="home_header" :class="{on:!showAdvertising}">
        <div class="home_header_top">
          狗狗 |
          <span  class="city">重庆</span>
          <span class="icon">
         <i class="iconfont icon-xiala"></i>
        </span>
          <span class="search">
          <input class="search_input" type="text" placeholder="搜索商品和品牌">
          <span>
           <i class="iconfont icon-search"></i>
          </span>
        </span>
          <span class="xiaoxi">
           <i class="iconfont icon-xiaoxi"></i>
        </span>
        </div>
        <!-- 1、menus列表 -->
        <div class="home_menu swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide menu_li_slide" v-for="(menu,index) in homeData.menus" :key="index"
                 @click="selectMenu(index)">
              <span class="menu_li" :class="{on: currentIndex === index}">{{menu.menu_name}}</span>
            </div>
          </div>
        </div>
      </header >
      <!-- 首页主体内容 -->
      <div class="home_container">
        <div class="home_content">
          <!-- 2、轮播图   JSON数据： dog_banner -->
          <div class="swiper-container first-baner">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="dogBanner in homeData.dog_banner">
                <a href="javascript:" class="link_to">
                  <img :src="dogBanner">
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <!-- 3、315我们  JSON数据： dog_img-->
          <div class="we">
            <img :src="homeData.dog_img" alt="">
          </div>
          <!-- 4、图标导航  menu_list -->
          <div class="nav_icon">
            <ul>
              <li v-for="nav in homeData.nav_list">
                <img :src="nav" alt="">
              </li>
            </ul>
          </div>
          <!-- 5、秒杀   miaosha-->
          <div class="miaosha">
            <img :src="homeData.miaosha" alt="">
          </div>
          <!-- 6、每日疯抢  surprise  -->
          <div class="qiang">
            <div class="qiang_top">
              <div class="qiang_logo" v-if="homeData.surprise">
                <img :src="homeData.surprise.logo" alt="">
              </div>
              <span class="qiang_text">
              <span>本场结束</span>
              <span class="number">21</span>
              <span>:</span>
              <span class="number">00</span>
              <span class="more">
                更多
                <i class="iconfont icon-gengduo"></i>
              </span>
            </span>
            </div>
            <div class="qiang_img">
              <ul v-if="homeData.surprise">
                <li v-for="(good,index) in homeData.surprise.goods" :key="index">
                  <img :src="good.img_ulr" alt="">
                  <span class="price">￥{{good.sale_price}}</span>
                  <span>省{{good.little_price}}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 7、品牌力量   brand_power-->
          <div class=" brand">
            <img :src="homeData.brand_power" alt="">
          </div>
          <!--8、 gif图片   gif -->
          <div class="gif_img">
            <img :src="homeData.gif" alt="">
          </div>
          <!-- 9、vip 尊享服务 vip -->
          <div class="vip">
            <img :src="homeData.vip" alt="">
          </div>
          <!-- 10、 e宠服务  vip_services-->
          <div class="go_sever">
            <ul>
              <li v-for="(vipServer,index) in homeData.vip_services" :key="index">
                <img :src="vipServer" alt="">
              </li>
            </ul>
          </div>
          <!-- 11、大牌团   dapaituan  -->
          <div class="zhe">
            <img :src="homeData.dapaituan" alt="">
          </div>
          <!-- 12、特价轮播    tejia_baner -->
          <div class="swiper-container tejia">
            <div class="swiper-wrapper tejia_wrap">
              <div class="swiper-slide tejia_silde" v-for="tejiaImg in homeData.tejia_baner">
                <a href="javascript:" class="link_to">
                  <img :src="tejiaImg" alt="">
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <!-- 13、大牌好货   haohuo  -->
          <div class="haohuo">
            <img :src="homeData.haohuo" alt="">
          </div>
          <!-- 14、通用广告  haohuo_list-->
          <div class="baner_first" v-if="homeData.haohuo_list" >
            <div class="ul_wrap" v-for="(ul_list,index) in homeData.haohuo_list" :key="index">
              <ul class="ul_container">
                <li class="item"  v-for="(left_ul,index) in ul_list.left" :key="index">
                  <img :src="left_ul" alt="">
                </li>
              </ul>
              <ul class="ul_container">
                <li class="item"  v-for="(right_ul,index) in ul_list.right" :key="index">
                  <img :src="right_ul" alt="">
                </li>
              </ul>
            </div>
          </div>
          <!-- 15、最惨奖  zuican -->
          <div class="can">
            <a href="javascript:;" class="can_img">
              <img :src="homeData.zuican" alt="">
            </a>
          </div>
          <!-- 16、留言区 zuican_content -->
          <div class="liuyan">
            <a href="javascript:;" class="liuyan_img">
              <img :src="homeData.zuican_content" alt="">
            </a>
          </div>
          <!-- 17、特别星期  special -->
          <div class="xing">
            <a href="javascript:;" class="xing_img">
              <img :src="homeData.special" alt="">
            </a>
          </div>
          <!-- 18、潮品预售   special_list -->
          <div class="chaopin">
            <div class="chaopin_left">
              <a href="javascript:;" class="chaopin_left_img" v-if="homeData.special_list">
                <img :src="homeData.special_list.special_left" alt="">
              </a>
            </div>
            <div class="chaopin-right" v-if="homeData.special_list">
              <a href="javascript:;" class="chaopin_right_img" v-for="special in homeData.special_list.special_right">
                <img :src="special" alt="">
              </a>
            </div>
          </div>
          <!-- 19、栏目  lanmu -->
          <div class="lanmu">
            <a href="javascript:;" class="lanmu_img">
              <img :src="homeData.lanmu" alt="">
            </a>
          </div>
          <!--  20、总和栏目  lanmu_list-->
          <div class="zonghe">
            <ul class="lanmu1" v-for="(lanmus,index) in homeData.lanmu_list" :key="index">
              <li v-for="(lanmu,index2) in lanmus" :key="index2">
                <img :src="lanmu" alt="">
              </li>
            </ul>
          </div>
          <!-- 底部 -->
          <footer class="home_footer">
            <div class="footer_top">
            <span>
              <a href="javascript:;" class="lianjie chuping">触屏版</a>
            </span>
              <span>
              <a href="javascript:;" class="lianjie">手机客户端</a>
            </span>
              <span>
              <a href="javascript:;" class="lianjie">关于我们</a>
            </span>
              <span>
              <a href="javascript:;" class="lianjie">联系我们</a>
            </span>
            </div>
            <p class="copy">
              <a href="javascript:;" class="lianjie copy_lianjie">
                &copy;wap.epet.com版权 : 重庆易宠科技有限公司
              </a>
            </p>
          </footer>
        </div>
      </div>
      <!-- 动画gougou -->
      <div class="dog">
      </div>
    </div>
  </div>
</template>

<script>
  import {setLoading} from '../../common/mixins'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default{
    mixins:[setLoading],
    data(){
      return {
        showAdvertising:true, // 默认显示头部广告
        menus: [],    // 初始化菜单导航
        currentIndex: 0,  // 当前menu的下标
        dog_banner: [],   // 初始化轮播图
        goods: []
      }
    },
    mounted(){
      this.$store.dispatch('getHomeData',() => {
        this.$nextTick(()=>{
          // menu菜单导航
          new Swiper('.home_menu.swiper-container',{
            slidesPerView: 5,  //设置一页显示的个数
            //spaceBetween: 20   // 每个之间的间距
          })
          // 1、创建轮播用的Swiper 对象
          new Swiper('.swiper-container.first-baner', {
            loop: true,
            // 配置小圆点
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            }
          })
          // 2、创建滚动效果的对象BScroll
          if(!this.scroll){  // 如果还没有scroll对象则创建一个
            this.scroll = new BScroll('.home_container',{
              click: true
            })
          }else{  // 已经存在scroll对象，则要通知该对象更新
            this.scroll.refresh()
          }
          //3、疯抢滑动
          if(!this.scrollSuper){  // 如果还没有scroll对象则创建一个
            this.scrollSuper = new BScroll('.qiang_img',{
              scrollX: true,
              click: true,
              probeType: 3,
            })
          }else{  // 已经存在scroll对象，则要通知该对象更新
            this.scrollSuper.refresh()
          }
          // 4、特价团购轮播
          new Swiper('.swiper-container.tejia',{
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            }
          })
        })
      })
    },
    computed: {
      ...mapState(['homeData'])
    },
    methods: {
      // 选中当前menu，更新样式
      selectMenu(index){
          this.currentIndex = index
      },
      // 关闭广告
      closeAdvertising(){
        this.showAdvertising = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_wrap
    height 100%
    width 100%
    position relative
    .header_advertising
      width 100%
      height 50px
      position fixed
      top 0
      z-index 2
      .advertising
        width 100%
        height 100%
        position relative
        .iconfont
          position absolute
          top 10px
          left 6px
          color #fff
          font-size 22px
        .advertising_link
          display block
          width 100%
          >img
            display block
            width 100%

    .home
      height 100%
      width 100%
      box-sizing border-box
      padding-top 100px
      &.on
        padding-top 50px
      // 头部样式
      .home_header
        position absolute
        top 0
        left 0
        right 0
        font-size 14px
        color #999999
        display flex
        justify-content center
        flex-direction column
        align-items center
        padding 70px 5px 0 5px
        background #fff
        z-index 1
        &.on
          padding-top 15px
        .home_header_top
          margin-left 20px
          width 100%
          .icon
            .iconfont
              font-size 12px
          .search
            width 50%
            padding 5px
            margin 0 10px
            border-radius 5px
            background #ddd
            .search_input
              outline none
              background #ddd
              border 0
          .xiaoxi
            text-align center
            .iconfont
              font-size 25px

        .swiper-container
          margin-top 20px
          height 100%
          text-align center
          .swiper-wrapper
            margin-bottom 15px
            .swiper-slide
              .menu_li
                padding-bottom 5px
                &.on
                  color green
                  border-bottom 1px solid green

      // 主体样式
      .home_container
        box-sizing border-box
        width 100%
        height 100%
        padding-top 40px
        /*padding-bottom 50px*/
        .home_content
          padding-bottom 150px
          // 主体轮播
          .swiper-container
            width 100%
            .swiper-wrapper
              width 100%
              .swiper-slide
                width 100%
                .link_to
                  >img
                    display block
                    width 100%
            .swiper-pagination
              >span.swiper-pagination-bullet-active
                background #fff
                width 16px
                border-radius 30px



          .we
            width 100%
            height 270px
            >img
              display block
              width 100%
              height 100%
          // 导航列表
          .nav_icon
            width 100%
            >ul
              width 100%
              display flex
              align-items center
              flex-wrap wrap
              >li
                width 20%
                >img
                  display block
                  width 100%

          .miaosha
            width 100%
            >img
              width 100%
              display block
          .qiang
            padding  10px 0 0 10px
            width 100%
            background #fff
            box-sizing border-box
            .qiang_top
              display flex
              justify-content space-around
              align-items center
              width 100%
              .qiang_logo
                width 30%
                >img
                  width 100%
              .qiang_text
                font-size 14px
                display flex
                justify-content space-around
                align-items center
                .number
                  padding 3px 3px
                  border 1px solid gainsboro
                  margin 0 5px
                .more
                  color #999
                  margin-left 20px
                  .iconfont
                    margin-left -5px
            .qiang_img
              margin 10px 0
              width 100%
              overflow hidden
              >ul
                padding-bottom 10px
                width 250%
                display flex
                >li
                  display flex
                  flex-direction column
                  font-size 12px
                  text-align center
                  margin 0 10px
                  >span
                    font-size 12px
                    margin 5px 0
                    color #999
                    &.price
                      color red
                  >img
                    width 85px
                    height 85px
                    margin-top 10px
          .brand
            width 100%
            >img
              display block
              width 100%


          .gif_img
            width 100%
            height 183px
            >img
              height 183px

          .vip
            width 100%
            >img
              display block
              width 100%
          .go_sever
            width 100%
            box-sizing border-box
            >ul
              display flex
              flex-wrap wrap
              justify-content space-around
              >li
                width 50%
                >img
                  width 100%
          .zhe
            width 100%
            >img
              display block
              width 100%
          .tejia
            width 100%
            .tejia_wrap
              width 100%
              display flex
              >img
                display block
                width 100%



          .haohuo
            width 100%
            >img
              width 100%
              display block


          .baner_first
            width 100%
            background black
            display flex
            flex-wrap wrap
            .ul_wrap
              width 100%
              display flex
              .ul_container
                width 50%
                display flex
                flex-wrap wrap
                .item
                  width 100%
                  >img
                    width 100%
                    display block





          .can
            width 100%
            .can_img
              width 100%
              display block
              >img
                width 100%
                display block
          .liuyan
            width 100%
            .liuyan_img
              width 100%
              display block
              >img
                width 100%
                display block

          .xing
            width 100%
            .xing_img
              width 100%
              display block
              >img
                width 100%
                display block

          .chaopin
            width 100%
            display flex
            flex-wrap wrap
            justify-content space-around
            .chaopin_left
              width 50%
              .chaopin_left_img
                width 100%
                display block
                >img
                  width 100%
                  display block

            .chaopin-right
              width 50%
              .chaopin_right_img
                width 100%
                display block
                >img
                  width 100%
                  display block
                  &.right_bottom
                    margin-top -10px


          .lanmu
            width 100%
            .lanmu_img
              width 100%
              display block
              >img
                width 100%
                display block

          .zonghe
            width 100%
            background black
            display flex
            flex-wrap wrap
            >ul
              width 50%
              display flex
              flex-wrap wrap
              padding-bottom 10px
              >li
                width 100%
                >img
                  width 100%
                  display block
          .home_footer
            margin-top 30px
            text-align center
            width 100%
            font-size 14px
            .footer_top
              width 100%
              padding 0 45px 10px 40px
              box-sizing border-box
              display flex
              justify-content space-between
              .lianjie
                color black
                &.chuping
                  color red
            .copy
              .copy_lianjie
                color black

      .dog
        position fixed
        right 0
        bottom 100px
        z-index 100
        width 43px
        height 47px
        background-image url('./images/dog.png')
        background-repeat no-repeat
        background-size 85px 47px
        animation dog_animation 2s steps(1,end) infinite
        @keyframes dog_animation
          50%
            background-position -43px 0






</style>
