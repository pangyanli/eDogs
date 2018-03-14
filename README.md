# 第一天
  ## 功能
    1、使用 vue-cli 简单搭建edogs E宠商城项目
    2、大致画了一下整体布局，没有写静态页面，直接在组件模板
    2、使用 vue-router 技术，搭建首页/分类/购物车/我的E宠 4个一级路由
    3、使用 BScroll 技术实现导航菜单的水平滑动（橡皮筋）效果
    4、使用 Swiper 第三方库实现首页轮播效果
    5、底部footer_guide功能
  ## 问题
    1、问题：WebStorm上使用stylus的时候经常报错找不到class
       原因：网速太慢，下载stylus 和 stylus-loader依赖包的时候丢包
       注意：1）如果写静态页面使用stylus，最好创建stylus文件夹/index.styl文件，然后再创建一个
       css文件夹，然后在WebStorm终端执行 cd stylus（进入该文件夹）--> stylus -w index.styl -o ../css/index.css
       执行完毕，在css文件夹下会多一个index.css文件，记得在主页面引入该生成的index.css文件
       2）如果直接在项目组件里面写stylus，那就不用执行上面的代码，直接在组件的style标签按照正常格式写就可以了，
       style标签要配置成<style lang="stylus" rel="stylesheet/stylus"></style>
    2、问题：使用Swiper做轮播图，一致报错，不出效果
            报错： "TypeError: Swiper is not a constructor"
       原因：使用let 重复定义了Swiper 不应写let Swiper = new Swiper()
             配置写错误，pagination是配置小圆点的
    3、问题：使用BScroll给主体内容做Y轴的滚动效果（带橡皮筋的效果的），没有效果，滑动不了
       原因：要用来绑定创建BScroll对象的这个容器没有限定高度（案例中该容器的高度应该为600多才对），内容完全
       是子元素撑开的，所以产生不了滚动，所以要给给容器确定高度，并且它左右的子元素的高度总和要高于它的高度，
       方案：一层一层找上去参考父级的百分百height，最终参考到初始包含块一样就可以，如果还不行，就在主组件App的
       根标签也添加一个id='app'，跟主页面index.html一致，因为有可能这里多了一层div有可能找不到id='app'

  ## 使用到的插件的下载方式
     1、使用vue的脚手架创建项目
        npm install -g vue-cli （如果已经全局安装过就不用再执行）
        vue init webpack edogs  （使用webpack构建工具，项目名edogs）
        cd edogs    （进入到项目文件夹）
        npm install   （安装所有依赖，或者直接 npm i）
        npm run dev    （运行项目,访问: localhost:8080）
        注意：如果想要npm run dev后自动打开浏览器，可以在config文件夹/index.js，改一下配置
          autoOpenBrowser: false, 将false改成true就可以了
     2、安装stylus依赖包
      npm install stylus stylus-loader --save-dev
     3、安装swiper
      npm install --save swiper
      在当前使用的组件引入
        import Swiper from 'swiper'
        import 'swiper/dist/css/swiper.min.css'  （样式）
      1）模版必须使用它的结构
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                          // 上面三层结构必不可少的，下面a标签及img是的可替换的内容
                        <a href="javascript:" class="link_to">
                          <img src="./images/2-bander1.jpg">
                        </a>
                      </div>
                    </div>
                  </div>
      2）js配置
          <script>
            import Swiper from 'swiper'
            import 'swiper/dist/css/swiper.min.css'
            export default{
              mounted(){
               new Swiper('.swiper-container', {
                  loop: true,
                 // 配置小圆点
                  pagination: {
                    // el必须是小圆点的结构
                    el: '.swiper-pagination'
                  },
                  autoplay: {  // 配置无限循环轮播
                           delay: 1500,
                           disableOnInteraction: false,
                  }
                })
              }
            }
          </script>
       3）style样式设置
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
      4、安装BScroll
          npm install --save better-scroll
          当前组件引入 import BScroll from 'better-scroll'
          1)在mounted函数中创建BScroll对象
          if(!this.scroll){  // 如果还没有scroll对象则创建一个
            this.scroll = new BScroll('.home_container',{
              click: true
            })
          }else{  // 已经存在scroll对象，则要通知该对象更新
            this.scroll.refresh()
          }
          注意: 注意home_container的高度要确定（不用具体，参考父级的百分百就可以，一层一层的父级都要参考，
           最终参考到body的百分百，并且要设置box-sizing border-box，如果还不行，就在App.vue组件的模版标签的
           根标签div也加一个与主页面一致

