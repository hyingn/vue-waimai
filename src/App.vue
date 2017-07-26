<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <ul class="tab flex">
      <li class="flex1"><router-link to="/good">商品</router-link></li>
      <li class="flex1"><router-link to="/rating">评论</router-link></li>
      <li class="flex1"><router-link to="/seller">商家</router-link></li>
    </ul>
    <router-view :seller="seller"></router-view>
    <v-cart :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice" ></v-cart>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import cart from './components/cart.vue'
  export default {
    data () {
      return {
        seller: {}
      }
    },
    components: {
      'v-header': header,
      'v-cart' : cart
    },
    created () {
      this.$http.get('/api/seller').then(response => {
        // get body data
        this.seller = response.data.data
      }, response => {
        // error callback
      })
      this.$router.push('good') // 页面加载时跳转
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .tab {
    border-bottom: #eee 1px solid;
  }
  .tab li {
    line-height: 40px;
    font-size: 14px;
  }
  .space {
    width: 100%;
    height: 10px;
    background-color: #eee;
  }
</style>
