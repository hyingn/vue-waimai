<template>
  <div class="jiesuan-box">
    <ul class="jiesuan-ul">
      <li v-for="value in sele" class="flex">
        <p class="flex2">名称：{{value.name}}</p>
        <p class="flex1">单价：{{value.price}}</p>
        <p class="flex1">数量：{{value.count}}</p>
      </li>
    </ul>
    <p class="total">总价：{{total}}</p>
    <button>去付款</button>
  </div>
</template>
<style>
  .jiesuan-box {
    padding: 20px;
  }
 .jiesuan-ul {
   margin-top: 20px;
   line-height: 30px;
 }
 .jiesuan-ul li {
   overflow: hidden;
   text-align: left;
   height: 30px;
 }
  .total {
    float: right;
    margin-top: 30px;
  }
  button {
    float: right;
    margin-top: 30px;
    clear: both;
    line-height: 40px;
    padding: 0 10px;
  }
</style>
<script>
  export default{
    computed: {
      sele () {
        let seleFood = JSON.parse(localStorage.getItem('select'))
        return seleFood
      },
      total () {
        let total = 0
        this.sele.forEach((sele) => {
          total += sele.count * sele.price
        })
        return total
      }
    }
  }
</script>
