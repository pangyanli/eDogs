<template>
  <div class="home">
    <!-- 首页头部 -->
    <header  class="home_header">
      <div class="home_header_top">
        <span  class="dog">狗狗 |</span>
        aasfas;flkjas;fj
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
      <div class="home_menu swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li on">首页</a>
          </div>
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li">狗狗主粮</a>
          </div>
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li">服饰</a>
          </div>
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li">医疗保健</a>
          </div>
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li">零食玩具</a>
          </div>
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li">首页</a>
          </div>
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li">零食玩具</a>
          </div>
          <div class="swiper-slide menu_li_slide">
            <a href="javascript:;" class="menu_li">日用外出</a>
          </div>
        </div>

        <!--<ul class="menu_ul">
          <li class="menu_li on" > 首页 </li>
          <li class="menu_li"> 狗狗主粮 </li>
          <li class="menu_li"> 服饰 </li>
          <li class="menu_li"> 医疗保健 </li>
          <li class="menu_li"> 零食玩具 </li>
        </ul>-->
      </div>
    </header >
    <!-- 首页主体内容 -->
    <div class="home_container">
      <div class="home_content">
        <!-- 轮播图   JSON数据： dog_banner -->
        <div class="swiper-container first-baner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:" class="link_to">
                  <img src="./images/2-bander1.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to">
                <img src="./images/2-bander1.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to">
                <img src="./images/2-bander1.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to">
                <img src="./images/2-bander1.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to">
                <img src="./images/2-bander1.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to">
                <img src="./images/2-bander1.jpg">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 315我们  JSON数据： dog_img-->
        <div class="we">
          <img src="./images/3-315.jpg" alt="">
        </div>
        <!-- 图标导航  menu_list -->
        <div class="nav_icon">
          <ul>
            <li>
              <img src="./images/4-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/4-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/4-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/4-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/4-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/5-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/5-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/5-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/5-nav.jpg" alt="">
            </li>
            <li>
              <img src="./images/5-nav.jpg" alt="">
            </li>
          </ul>
        </div>
        <!-- 秒杀   miaosha-->
        <div class="miaosha">
          <img src="./images/6-m.jpg" alt="">
        </div>
        <!-- 每日疯抢  surprise  -->
        <div class="qiang">
          <div class="qiang_top">
            <div class="qiang_logo">
              <img src="./images/7-1qiang.png" alt="">
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
            <ul>
              <li>
                <img src="./images/8-1baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-2baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-1baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-2baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-1baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-2baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-2baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-2baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
              <li>
                <img src="./images/8-2baner2.jpg" alt="">
                <span class="price">￥2.99</span>
                <span>省11.52</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 品牌力量   brand_power-->
        <div class=" brand">
          <img src="./images/9-pin.jpg" alt="">
        </div>
        <!-- gif图片   gif -->
        <div class="gif_img">
          <img src="./images/10-baner3.gif" alt="">
        </div>
        <!-- vip 尊享服务 vip -->
        <div class="vip">
          <img src="./images/11-vip.jpg" alt="">
        </div>
        <!--  e宠服务  vip_services-->
        <div class="go_sever">
          <ul>
            <li>
              <img src="./images/12-1.jpg" alt="">
            </li>
            <li>
              <img src="./images/12-2.jpg" alt="">
            </li>
            <li>
              <img src="./images/12-1.jpg" alt="">
            </li>
            <li>
              <img src="./images/12-2.jpg" alt="">
            </li>
          </ul>
        </div>
        <!-- 大牌团   dapaituan  -->
        <div class="zhe">
          <img src="./images/13-zhe.jpg" alt="">
        </div>
        <!-- 特价轮播    tejia_baner -->
        <div class="swiper-container tejia">
          <div class="swiper-wrapper tejia_wrap">
            <div class="swiper-slide tejia_silde">
              <a href="javascript:" class="link_to">
                <img src="./images/14-te.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide tejia_silde">
              <a href="javascript:" class="link_to">
                <img src="./images/14-te.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide tejia_silde">
              <a href="javascript:" class="link_to">
                <img src="./images/14-te.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide tejia_silde">
              <a href="javascript:" class="link_to">
                <img src="./images/14-te.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide tejia_silde">
              <a href="javascript:" class="link_to">
                <img src="./images/14-te.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide tejia_silde">
              <a href="javascript:" class="link_to">
                <img src="./images/14-te.jpg" alt="">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 大牌好货   haohuo  -->
        <div class="haohuo">
          <img src="./images/15-hao.jpg" alt="">
        </div>
        <!-- 通用广告  haohuo_list-->
        <div class="baner_first">
          <ul>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
          </ul>
          <ul>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
          </ul>
          <ul>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
          </ul>
          <ul>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
          </ul>
          <ul>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-1xuan.jpg" alt="">
            </li>
            <li>
              <img src="./images/16-2xuan.jpg" alt="">
            </li>
          </ul>
        </div>
        <!-- 最惨奖  zuican -->
        <div class="can">
          <a href="javascript:;" class="can_img">
            <img src="./images/17-can.jpg" alt="">
          </a>
        </div>
        <!-- 留言区 zuican_content -->
        <div class="liuyan">
          <a href="javascript:;" class="liuyan_img">
            <img src="./images/18-liu.jpg" alt="">
          </a>
        </div>
        <!-- 特别星期  special -->
        <div class="xing">
          <a href="javascript:;" class="xing_img">
            <img src="./images/19-xing.jpg" alt="">
          </a>
        </div>
        <!-- 潮品预售   special_list -->
        <div class="chaopin">
          <div class="chaopin_left">
            <a href="javascript:;" class="chaopin_left_img">
              <img src="./images/20-1caho.jpg" alt="">
            </a>
          </div>
          <div class="chaopin-right">
            <a href="javascript:;" class="chaopin_right_img">
              <img src="./images/20-2chao.jpg" alt="">
            </a>
            <a href="javascript:;" class="chaopin_right_img right_bottom" >
              <img src="./images/20-3chao.jpg" alt="">
            </a>
          </div>
        </div>
        <!-- 栏目  lanmu -->
        <div class="lanmu">
          <a href="javascript:;" class="lanmu_img">
            <img src="./images/21-lan.jpg" alt="">
          </a>
        </div>
        <!--  总和栏目  lanmu_list-->
        <div class="zonghe">
          <ul>
            <li>
              <img src="./images/22-1e.jpg" alt="">
            </li>
            <li>
              <img src="./images/22-2e.jpg" alt="">
            </li>
            <li>
              <img src="./images/22-2e.jpg" alt="">
            </li>
            <li>
              <img src="./images/22-1e.jpg" alt="">
            </li>
            <li>
              <img src="./images/22-1e.jpg" alt="">
            </li>
            <li>
              <img src="./images/22-2e.jpg" alt="">
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
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    mounted(){
      // menu菜单导航
      new Swiper('.home_menu.swiper-container',{
        slidesPerView: 5,
//        spaceBetween: 20
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

      // 创建滚动效果的对象BScroll
      if(!this.scroll){  // 如果还没有scroll对象则创建一个
        this.scroll = new BScroll('.home_container',{
          click: true
        })
      }else{  // 已经存在scroll对象，则要通知该对象更新
        this.scroll.refresh()
      }

      //2、疯抢滑动
      if(!this.scrollSuper){  // 如果还没有scroll对象则创建一个
        this.scrollSuper = new BScroll('.qiang_img',{
          scrollX: true,
          click: true,
          probeType: 3,
        })
      }else{  // 已经存在scroll对象，则要通知该对象更新
        this.scrollSuper.refresh()
      }

      // 3、特价团购轮播
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    height 100%
    width 100%
    position relative
  // 头部样式
    .home_header
      position fixed
      top 0
      left 0
      right 0
      font-size 14px
      color #999999
      display flex
      justify-content center
      flex-direction column
      align-items center
      padding 15px 5px 0 5px
      background #fff
      z-index 100
      .home_header_top
        text-align right
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
      padding-top 90px
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
              background #02a774
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
          >ul
            width 100%
            display flex
            flex-wrap wrap
            justify-content space-around
            padding 5px 0
            border-top 1px solid rgba(255,255,255,0.5)
            >li
              width 49%
              border-left 1px solid rgba(255,255,255,0.5)
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
          >ul
            width 100%
            display flex
            flex-wrap wrap
            justify-content space-around
            padding-bottom 10px
            border-top 1px solid rgba(255,255,255,0.5)
            border-bottom 1px solid rgba(255,255,255,0.5)
            >li
              width 49%
              border-right 1px solid rgba(255,255,255,0.5)
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
