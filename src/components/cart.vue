<template>
  <div class="cart-box">
    <cart-dtail v-if="sDetail" :selectFoods="selectFoods"></cart-dtail>
    <ul class="cart-ul flex" @click="showDetail">
      <li class="flex1">
        <img class="cart-img" :class="totalPrice>0 ? 'hide' : ''" src="../assets/cart.png" alt="">
        <img class="cart-img carted" :class="totalPrice>0 ? 'imgshow' : ''" src="../assets/cartd.png" alt="">
        <span>￥{{totalPrice}}</span></li>
      <li class="flex1">配送费￥{{deliveryPrice}}</li>
      <li class="flex1" :class="{jiesuan: this.totalPrice >= this.minPrice}" @click="goJieSuan">{{payDesc}}<router-link v-if="jsFlag" to="/jiesuan">去结算</router-link></li>
    </ul>
  </div>
</template>
<style>
  .cart-box {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 999;
  }
  .cart-img {
    height: 40px;
    vertical-align: middle;
  }
  .cart-ul {
    background: #131d26;
  }
  .cart-ul li{
    padding: 10px;
    height: 40px;
    line-height: 40px;
    color: #ddd;
  }
  .cart-ul span {
    display: inline-block;
    vertical-align: middle;
  }
  .carted {
    display: none;
  }
  .cart-ul .jiesuan {
    background-color: #00b43c;
    color: #fff;
  }
  .imgshow {
    display: inline-block;
  }
  .jiesuan a {
    color: #fff;
  }
</style>
<script>
  import cartDetail from './cartDetail.vue'
  export default{
    components: {
      'cart-dtail': cartDetail
    },
    props: {
      minPrice: {
        type: Number,
        default: 0
      },
      deliveryPrice: {},
      selectFoods: {
        type: Array,
        default () {
          return [
            {
              price: 0,
              count: 0
            }
          ]
        }
      }
    },
    data () {
      return {
        sDetail: false,
        jsFlag: 0
      }
    },
    created () {},
    computed: {
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      payDesc () {
        if (this.totalPrice === 0) {
          return '￥' + this.minPrice + '起送'
        } else if (this.totalPrice < this.minPrice) {
          let money = this.minPrice - this.totalPrice
          return '还差￥' + money + '起送'
        } else {
          this.jsFlag = 1
        }
      }
    },
    methods: {
      showDetail () {
        if (this.totalPrice > 0) {
          this.sDetail = !this.sDetail
        }
      },
      goJieSuan () {
        if (this.jsFlag == 1) {
          localStorage.clear()
          let jsList = this.selectFoods
          localStorage.setItem('select', JSON.stringify(jsList))
        }
      }
    }
  }
</script>
