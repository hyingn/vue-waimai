<template>
  <div class="btn-control fr">
    <p class="fr btn-group">
      <span class="minus" v-show="food.count>0" @click="countMin($event)"></span>
      <span v-show="food.count>0">{{food.count}}</span>
      <span class="add" @click="countAdd($event)"></span>
    </p>
  </div>
</template>
<style>
  .minus {
    margin-right: 10px;
    width: 22px;
    height: 22px;
    background: url("../assets/minus.png");
    background-size: 22px 22px;
  }
  .add {
    margin-left: 10px;
    width: 22px;
    height: 22px;
    background: url("../assets/add.png");
    background-size: 22px 22px;
  }
  .item-left span {
    font-size: 12px;
  }
  .btn-group {
    height: 22px;
    line-height: 22px;
  }
  .btn-group span{
    display: inline-block;
    vertical-align: middle;
  }
</style>
<script>
  import Vue from 'vue'
  export default{
    props: {
      food: {}
    },
    create () {
      console.log(this.food)
    },
    methods: {
      countAdd (ev) {
        ev.cancelBubble = true
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      },
      countMin (ev) {
        ev.cancelBubble = true
        this.food.count--
      }
    }
  }
</script>
