<template>
  <div class="seller-box">
      <div class="seller-title">
        <div class="star fl">
          <p>{{seller.name}}</p>
          <span :class="Math.round(seller.score)>0 ? 'on' : ''"></span>
          <span :class="Math.round(seller.score)>1 ? 'on' : ''"></span>
          <span :class="Math.round(seller.score)>2 ? 'on' : ''"></span>
          <span :class="Math.round(seller.score)>3 ? 'on' : ''"></span>
          <span :class="Math.round(seller.score)>4 ? 'on' : ''"></span>
          <span class="num">({{seller.ratingCount}})</span>
          <span class="num">月售{{seller.sellCount}}单</span>
        </div>
        <div class="select-box fr" @click="select = !select">
          <p class="select" :class="{ selectd: select}"></p>
          <p v-show="!select">收藏</p>
          <p v-show="select">已收藏</p>
        </div>
        <ul class="flex">
          <li class="flex1">
            <p>起送价</p>
            <p>￥{{seller.minPrice}}</p>
          </li>
          <li class="flex1">
            <p>商家配送</p>
            <p>￥{{seller.deliveryPrice}}</p>
          </li>
          <li class="flex1">
            <p>平均配送时间</p>
            <p>{{seller.deliveryTime}}</p>
          </li>
        </ul>
      </div>
    <div class="space"></div>
    <div class="type-box">
      <h2 class="title">公告与活动</h2>
      <p>{{seller.gongao}}</p>
      <div class="ul-box">
        <ul class="active-ul">
          <li v-for="value in seller.supports"><span class="special"></span>{{value.description}}</li>
        </ul>
      </div>
    </div>
    <div class="space"></div>
    <div class="type-box">
      <h2 class="title">商家实景</h2>
      <div class="ul-box">
        <ul class="img-ul" ref="imgul">
          <li v-for="value in seller.pics"><img :src="value" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="space"></div>
    <div class="type-box">
      <h2 class="title">商家信息</h2>
      <ul class="active-ul">
        <li v-for="value in seller.infos">{{value}}</li>
      </ul>
    </div>
  </div>
</template>
<style>
  .seller-box {
    width: 100%;
    overflow-x: hidden;
  }
  .seller-title {
    padding: 18px;
    padding-bottom: 0;
    text-align: left;
  }
  .select-box {
    text-align: center;
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
  .select {
    margin: 10px auto 4px;
    width: 22px;
    height: 20px;
    background: url("../assets/save.png");
    background-size: 22px 20px;
  }
  .selectd {
    background-image: url("../assets/saved.png");
  }
  .title {
    font-size: 18px;
    text-align: left;
    padding-bottom: 12px;
  }
  .seller-title ul {
    border-top: 1px solid #eee;
    width: 100%;
    clear: both;
  }
  .seller-title li {
    margin: 18px 0;
    text-align: center;
    border-left: 1px solid #eee;
  }
  .seller-title li:first-child {
    border-left: 0;
  }
  .seller-title li p:first-child {
    color: #93999f;
  }
  .seller-title li p:last-child {
    margin-top: 4px;
    font-size: 24px;
  }
  .type-box {
    padding: 12px;
  }
  .type-box p {
    text-align: left;
    padding-bottom: 12px;
    line-height: 1.5;
    color: #ff4b4b;
    width: 100%;
    overflow-x: hidden;
  }
  .active-ul li {
    text-align: left;
    border-top: 1px solid #eee;
    padding: 16px 0;
    vertical-align: middle;
  }
  .ul-box {
    overflow: auto;
  }
  .img-ul {
    height: 100px;
    padding-bottom: 18px;
  }
  .img-ul li {
    float: left;
    margin-right: 10px;
  }
  .img-ul img {
    width: 120px;
    height: 90px;
  }
  .special {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: url("../assets/special.png");
    background-size: 18px 18px;
  }
  .star {
   margin-bottom: 18px;
    margin-top: 8px;
    margin-right: 10px;
  }
  .star p {
    margin-bottom: 12px;
  }
  .star span{
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url("../assets/staroff.png");
    background-size: 15px;
    font-size: 14px;
  }
  .star .on {
    background-image: url("../assets/staron.png");
  }
  .star .num {
    width: auto;
    background: none;
  }
</style>
<script>
  export default{
    data () {
      return {
        select: 0
      }
    },
    props: {
      seller: {}
    },
    mounted () {
      this.imgUl()
    },
    watch: {
      'seller' () {
        this.select = this.seller.select
        this.imgUl()
      }
    },
    methods: {
      imgUl () {
        if (this.seller.pics) {
          let picWidth = 120
          let margin = 10
          this.$nextTick(() => {
            let width = (picWidth + margin) * this.seller.pics.length
            this.$refs.imgul.style.width = width + 'px'
          })
        }
      }
    }
  }

</script>
