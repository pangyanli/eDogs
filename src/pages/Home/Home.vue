<template>
  <div class="home">
    <header  class="home_header">
      <div class="home_header_top">
        <span  class="dog">狗狗 |</span>
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
      <div class="home_menu">
        <ul class="menu_ul">
          <li class="menu_li on" > 首页 </li>
          <li class="menu_li"> 狗狗主粮 </li>
          <li class="menu_li"> 服饰 </li>
          <li class="menu_li"> 医疗保健 </li>
          <li class="menu_li"> 零食玩具 </li>
        </ul>
      </div>
    </header >
    <div class="home_container">
      <div class="home_content">
        <!-- 轮播图 -->
        <div class="swiper-container">
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
        <div class="we">
          <img src="./images/3-315.jpg" alt="">
        </div>
        <!-- 图标导航 -->
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
        <div class="miaosha">
          <img src="./images/6-m.jpg" alt="">
        </div>
        <!-- 每日疯抢 -->
        <div class="qiang">
          <div class="qiang_top">
            <div class="qiang_logo">
              <img src="./images/7-1qiang.png" alt="">
            </div>
            <div class="qiang_text">
              <span>本场结束</span>
              <span class="number">21</span>
              <span>:</span>
              <span class="number">00</span>
              <span>
                <img src="./images/7-2duo.png" alt="">
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <footer class="home_footer"></footer>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    mounted(){
      // 创建轮播用的Swiper 对象
      new Swiper('.swiper-container', {
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

      .home_menu
        width 100%
        margin 20px 0 10px 0
        .menu_ul
          display flex
          justify-content space-around
          overflow hidden
          .menu_li
            margin 5px 5px
            flex-direction column
            align-items center
            padding-bottom 5px
            &.on
              color green
              border-bottom 1px solid green




    // 主体样式
    .home_container
      box-sizing border-box
      width 100%
      height 100%
      padding-top 80px
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
          overflow hidden
          padding  10px 0 0 10px
          width 100%
          background #fff
          .qiang_top
            width 100%
            .qiang_logo
              float left
              width 30%
              >img
                width 100%
            .qiang_text
              float right
              font-size 14px
              .number
                border 1px solid gainsboro
</style>
