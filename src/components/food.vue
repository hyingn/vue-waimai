<template>
  <div class="food-box" v-show="showFlag">
    <div class="arrow" @click="showFlag=!showFlag"></div>
    <img :src="foodSec.image" class="head-img" alt="">
    <div class="title-box">
      <h2>{{foodSec.name}}</h2>
      <p><span>月售{{foodSec.sellCount}}份</span><span>好评率{{foodSec.rating}}</span></p>
      <div class="price-box"><span class="price">￥{{foodSec.price}}</span><span v-if="foodSec.oldPrice">￥{{foodSec.oldPrice}}</span></div>
      <div class="btn" @click="countAdd">加入购物车</div>
    </div>
    <div class="space"></div>
    <div class="food-type-box" v-if="foodSec.info">
      <h2 class="title" >
        商品介绍
      </h2>
      <p>{{foodSec.info}}</p>
    </div>
    <div class="space"></div>
    <div class="food-type-box" v-if="foodSec.ratings">
      <h2 class="title">
        商品评价
      </h2>
      <ul class="rat-ul">
        <li v-for="value in foodSec.ratings" v-if="value.text">
          <p>{{value.username}}</p>
          <p><span>{{value.text}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  .arrow {
    position: absolute;
    top:15px;
    left: 10px;
    width: 12px;
    height: 14px;
    background-image: url("../assets/arrow.png");
    background-size: 12px 14px;
  }
  .food-box{
    text-align: left;
    position: fixed;
    left: 0;
    top:0;
    bottom: 60px;
    z-index: 33;
    width: 100%;
    background: #fff;
    overflow: auto;
  }
  .head-img {
    width:100%;
  }
  .title-box {
    overflow: hidden;
    padding: 16px;
  }
  .food-box h2 {
    font-size: 20px;
    padding-bottom: 12px;
  }
  .title-box span {
    margin-top: 5px;
    color: #7e8c8d;
    margin-right: 12px;
  }
  .title-box .price {
    color: red;
    font-size: 20px;
  }
  .price-box {
    float: left;
    margin-top: 18px;
    width: 200px;
  }
  .title-box .btn {
    float: right;
    margin-top: 10px;
    width: 140px;
    text-align: center;
    color: #fff;
    padding: 8px 0px;
    background-color: #00a0dc;
    border-radius: 20px;
  }
  .food-type-box {
    color: #333333;
    padding: 16px;
  }
  .rat-ul p{
    margin: 5px 0;
  }
</style>
<script>
  import Vue from 'vue'
  export default {
    props: {
      foodSec: {},
      ratLen: 0
    },
    data () {
      return {
        showFlag: false
      }
    },
    watch: {
      'foodSec' () {
        console.log(this.foodSec.ratings.length)
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      countAdd () {
        if (!this.foodSec.count) {
          Vue.set(this.foodSec, 'count', 1)
        } else {
          this.foodSec.count++
        }
      }
    }
  }
</script>
