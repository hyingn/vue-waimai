<template>
  <div class="cart-detail">
    <div class="title-cart" v-if="selectFoods.length">
      <p class="fl">购物车</p>
      <p class="fr clear" @click="clear">清空</p>
    </div>
    <ul class="detail-ul">
      <li v-for="value in selectFoods">
        <div class="fl">{{value.name}}</div>
        <div class="fr"><p class="fl price">￥{{value.price}}</p><v-btnCon :food="value"></v-btnCon></div>
      </li>
    </ul>
  </div>
</template>
<style>
  .cart-detail {
    max-height: 300px;
    overflow: auto;
    background-color: #fff;
  }
  .title-cart {
    overflow: hidden;
    padding: 10px;
    background-color: #eee;
  }
  .detail-ul li {
    overflow: hidden;
    padding: 10px;
  }
  .clear {
    color: #00a0dc;
  }
  .price {
    margin-right: 30px;
  }
</style>
<script>
  import btnCon from './btn.vue'
  export default {
    components: {
      'v-btnCon': btnCon
    },
    props: {
      selectFoods: {}
    },
    created () {
      console.log(this.selectFoods)
    },
    methods: {
      clear () {
        this.selectFoods = {}
      }
    }
  }
</script>
