<template>
<div class="head-content">
  <div class="head-top flex">
    <img :src="seller.avatar" alt="" class="seller-img">
    <div class="seller-detail flex1">
      <p class="name" :class="{pingpai:seller.ispingPai}">{{seller.name}}</p>
      <p>{{seller.description}}/{{seller.deliveryTime}}送达</p>
      <div v-if="seller.supports">
        <p class="fl"><span class="youhui">{{seller.supports[0].description}}</span></p>
        <p class="fr num"   @click="hdPush=!hdPush">{{seller.supports.length}}活动 ></p>
      </div>
    </div>
  </div>
  <p class="tip">{{seller.bulletin}}</p>
  <div class="hdpush" :class="{show: hdPush}">
    <h2 class="title">优惠信息</h2>
    <p v-for="value in seller.supports">{{value.description}}</p>
    <div class="close" @click="hdPush=!hdPush">x</div>
  </div>
</div>

</template>
<style>
  .head-content {
    text-align: left;
    color: #fff;
    background-color: rgba(7,17,27,.2);
    background-image: url("https://aliyun.tbscache.com/static/home/images/case_banner.jpg?v=111");
  }
  .head-content .name {
    font-size: 16px;
  }
  .head-content .num {
    margin-right: 20px;
  }
  .head-content p {
    margin-top: 3px;
    font-size: 12px;
  }
  .head-top {
    padding-top: 20px;
  }
  .seller-img {
    display: block;
    margin-left: 20px;
    margin-right: 16px;
    padding-bottom: 16px;
    flex: 0 0 64px;
    height: 64px;
  }
  .pingpai {
    padding-left: 35px;
    background: url("../assets/brand.png") no-repeat;
    background-size: 30px 18px;
  }
  .tip {
    margin: 5px 10px 0;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    overflow: hidden;
    border-top: 1px solid #fff;
  }
  .seller-detail {
    text-align: left;
  }
  .youhui {
    font-size: 12px;
    margin-right: 6px;
  }
  .hdpush {
    display: none;
    position: fixed;
    left: 5%;
    top: 3%;
    z-index: 999;
    padding-left: 5%;
    width: 85%;
    height: 90%;
    background-color: rgba(1,1,1,.8);
  }
  .hdpush .title {
    margin: 15px 0;
    text-align: center;
    font-size: 16px;
  }
  .hdpush p{
    margin: 5px 0;
  }
  .close {
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: -20px;
    font-size: 36px;
    border-radius: 50%;
    text-align: center;
    line-height: 35px;
    border: 2px solid #fff;
  }
  .show {
    display: block;
  }
</style>
<script>
  export default {
    data () {
      return {
        supports: '',
        length: 0,
        hdPush: false
      }
    },
    props: {
      seller: {
        type: Object,
        default: {}
      }
    },
    created () {},
    methods: {
      aa () {
        this.hdPush = !this.hdPush
      }
    }
  }
</script>
