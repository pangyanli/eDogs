<template>
  <div class="categorys_brand">
    <div class="categorys_header bottom-border-1px">
      <div class="categorys_list" @click="selected(1)">
        <a href="javascript:;" class="categorys_text" :class="{on:selectType===1}">分类</a>
      </div>
      <div class="pinpai" @click="selected(2)">
        <a href="javascript:;" class="pinpai_text" :class="{on:selectType===2}">品牌</a>
        <a> <i class="iconfont icon-search"></i> </a>
      </div>
    </div>
    <div class="categorys_content" v-show="selectType===1">
      <div id="categorys_list">
        <ul>
          <li class="list" :class="{on: currentCateIndex===index}" v-for="(classify,index) in categorys"
              :key="index" @click="clickCurrentCategory(index)">{{classify.name}}</li>
        </ul>
      </div>
      <div id="pinpai_container" v-if="categorys[currentCateIndex]">
        <div class="pinpai_list">
          <div class="zhuliang" v-if="pinpaiItem.type === 0"
               v-for="(pinpaiItem,index) in categorys[currentCateIndex].cate_list">
            <div class="title">
              <span>{{pinpaiItem.title}}</span>
              <a class="link_to">
                <span>全部商品<i class="iconfont icon-quanbu"></i></span>
              </a>
            </div>
            <ul class="zhuliang_ul">
              <li class="zhuliang_list" v-for="(good,index) in pinpaiItem.list">
                <img :src="good.photo" alt="">
                <span>{{good.name}}</span>
              </li>
            </ul>
          </div>
          <div class="remen" v-if="pinpaiItem.type === 2"
               v-for="(pinpaiItem,index) in categorys[currentCateIndex].cate_list">
            <p class="remen_title">{{pinpaiItem.title}}</p>
            <ul class="remen_ul">
              <li class="remen_li" v-for="(pinPai,index) in pinpaiItem.list">
                <img :src="pinPai.logo" alt="">
                <span>{{pinPai.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="brand_container" v-show="selectType===2">
      <div class="brand_content">
        <div class="brand_item" v-for="(item,index) in brand">
          <div class="brand_list_title">
            <span>—— {{item.title}} ——</span>
          </div>
          <div class="brand_list">
            <ul class="list_ul">
              <li class="list_li" v-for="(pinpaiGood,index) in item.list">
                <div class="img_container">
                  <img :src="pinpaiGood.logo" alt="">
                </div>
                <p class="name">{{pinpaiGood.name}}</p>
                <p class=" name country">{{pinpaiGood.address}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {setLoading} from '../../common/mixins'

  export default{
    mixins: [setLoading],
    data(){
      return {
        selectType: 1, // 默认选中分类
        currentCateIndex: 0  // 默认选中分类列表的第一个为您推荐
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys',() => {
        this.$nextTick(() => {
          // 左边分类列表滑动效果
          if(!this.scrollCategorys){
            this.scrollCategorys = new BScroll('#categorys_list',{
              click: true
            })
          }else{
            this.scrollCategorys.refresh()
          }
        })
      })
      this.$store.dispatch('getBrand', () => {
        this.$nextTick(() => {
          // 右侧热门品牌
          if(!this.scrollRemen){
            this.scrollRemen = new BScroll('#pinpai_container',{
              click: true
            })
          }else{
            this.scrollRemen.refresh()
          }
        })
      })
    },
    computed: {
      ...mapState(['categorys','brand'])
    },
    methods: {
      // 头部选择分类还是品牌
      selected(selectType){
        this.selectType = selectType
        /* 创建品牌页面的滑动的BScroll对象，点击品牌时才去创建BScroll对象，创建太早了就没有效果了
        不能在分发事件的回调函数中创建，因为请求回来的数据不点击品牌，那就是隐藏的，所有没有高度的*/
        if(selectType===2){
            this.$nextTick(()=>{
              if(!this.scrollBrand){
                this.scrollBrand = new BScroll('#brand_container',{
                  click: true
                })
              }else{
                this.scrollBrand.refresh()
              }
            });
        }

        if(selectType===1){

        }
      },
      //选分类列表的内容
      clickCurrentCategory(index){
        this.currentCateIndex = index
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .categorys_brand
    width 100%
    height 100%
    position relative
    background #f5f5f5
    .categorys_header
      bottom-border-1px(#999)
      position fixed
      top 0
      left 0
      right 0
      height 50px
      z-index 100
      display flex
      justify-content space-between
      align-items center
      background #fff
      .categorys_list
        width 50%
        text-align right
        padding-right 5%
        height 50px
        line-height 50px
        font-size 13px
        .categorys_text
          color #333
          display inline-block

          &.on
            color red
            border-bottom 1px solid red
      .pinpai
        width 50%
        padding-left 5%
        height 50px
        line-height 50px
        font-size 13px
        float left
        .pinpai_text
          color #333
          display inline-block
          &.on
            color red
            border-bottom 1px solid red


        .iconfont
          float right
          margin-right 15px

    .categorys_content
      width 100%
      height 100%
      box-sizing border-box
      padding-top 50px
      font-size 14px
      display flex
      #categorys_list
        height 100%
        width 20%
        >ul
          width 100%
          display flex
          text-align center
          flex-direction column
          background #fff
          margin-right 5px
          padding-bottom 50px
          .list
            padding 20px 0
            height 100%
            width 100%
            border-bottom 1px solid #f5f5f5
            &.on
              background  #f5f5f5
              color red




      #pinpai_container
        width 80%
        height 100%
        margin 5px 0 0 6px
        .pinpai_list
          background #fff
          width 100%
          padding 10px 10px
          box-sizing border-box
          .zhuliang
            bottom-border-1px(#f5f5f5)
            width 100%
            margin  10px 0
            .title
              width 100%
              display flex
              justify-content space-between
              .link_to
                display block
                margin-left 140px
                font-size 10px


            .zhuliang_ul
              width 100%
              display flex
              justify-content flex-start
              text-align center
              flex-wrap wrap
              padding-bottom 20px
              .zhuliang_list
                margin 10px 0px
                width 33.3333333%
                >img
                  width 87px
                  height 87px
                  display block
                  margin-bottom 10px



          .remen
            width 100%
            margin 30px 0
            .remen_title
              color #999
              text-align left

            .remen_ul
              margin-top 10px
              width 100%
              display flex
              flex-wrap wrap
              justify-content space-between
              .remen_li
                width 48%
                height 100px
                text-align center
                font-size 12px
                >img
                  padding 5px 10px
                  width 80%
                  display block
                  border 1px solid #ddd
                  margin-bottom 10px





    #brand_container
      width 100%
      height 100%
      padding-top 55px
      box-sizing border-box
      .brand_content
        width 100%
        background #ffffff
        .brand_item
          width 100%
          padding 20px 10px 0
          text-align center
          color #999
          font-size 12px
          box-sizing border-box
          margin-bottom 10px
          .brand_list
            margin-top 20px
            width 100%
            .list_ul
              width 100%
              display flex
              flex-wrap wrap
              justify-content space-between
              .list_li
                width 32%
                margin-bottom 15px
                .img_container
                  width 100%
                  height 60px
                  border 1px solid #e2e2e2
                  box-sizing border-box
                  padding 20px 10px
                  margin-bottom 5px
                  >img
                    margin-top -15px
                    width 100%
                    display block
                .name
                  width 100%
                  height 20px
                  line-height 20px
                  color black
                  &.country
                    color #999

</style>
