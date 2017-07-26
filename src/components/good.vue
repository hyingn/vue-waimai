<template>
  <div>
  <div class="good-box flex">
    <div class="left" ref="menuWapper">
      <ul>
        <li v-for="(value,index) in goods" @click="toItem(index)" :class="[currIndex === index ? 'active':'']"><span :class="[value.type ==2 ?  'teIcon': '']"></span>{{value.name}}</li>
      </ul>
    </div>
    <div class="right flex1" ref="foodWapper">
      <ul class="item-ul" >
        <li v-for="value in goods" class="goods-list-hook">
          <h3>{{value.name}}</h3>
          <div v-for="value in value.foods" class="flex item-box" >
            <img class="item-img" :src="value.icon" alt="" @click="foodDetail(value)">
            <div class="item-left flex1">
              <h4>{{value.name}}</h4>
              <span>月售 {{value.sellCount}} 份</span> <span>好评率 {{value.rating|Rating}}</span>
              <div>
                <p class="fl">￥{{value.price}}</p>
                <v-btn :food="value"></v-btn>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
    <food :foodSec="foodSec" :selectFoods="selectFood" ref="food"></food>
    <!--<v-cart :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice" :selectFoods="selectFood"></v-cart>-->
  </div>
</template>
<style>
  .good-box {
    position: absolute;
    width: 100%;
    top:175px;
    bottom: 60px;
    overflow: hidden;
  }
  .left {
    flex: 0 0 114px;
    text-align: left;
    font-size: 14px;
  }
  .left ul {
    overflow: auto;
  }
  .left li {
    padding: 12px;
    background-color: #eee;
    border-bottom: 1px solid #fff;
    line-height: 20px;
  }
  .left .active {
    background-color: #fff;
  }
  .right {
    overflow: auto;
  }
  .teIcon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url("../assets/special.png") no-repeat;
    background-size: 20px 20px;
  }
  .item-img {
    flex: 0 0 60px;
    height: 60px;
    margin-right: 8px;
  }
  .item-box {
    padding: 16px;
  }
  .item-left {
  text-align: left;
  }
  .item-ul h3 {
    padding: 10px;
    background-color: #eee;
    border-left: 4px solid #ddd;
    text-align: left;
    color: #333;
    font-weight: normal;
    font-size: 16px;
  }

 </style>
<script>
  import cart from './cart.vue'
  import btnCon from './btn.vue'
  import food from './food.vue'
  import Bscroll from 'better-scroll'
  export default {
    components: {
      'v-btn': btnCon,
      'v-cart': cart,
      food
    },
    data () {
      return {
        goods: [],
        goodsItem: [],
        seller: {},
        foodSec: [],
        listHeight: [0],
        scrollY: 0
      }
    },
    created () {
      this.$http.get('/api/goods').then(response => {
        // get body data
        this.goods = response.data.data
        this.$nextTick(() => {
          this._initScroll()
        })
      }, response => {
        // error callback
      })
      this.$http.get('/api/seller').then(response => {
        // get body data
        this.seller = response.data.data
      }, response => {
        // error callback
      })
    },
    methods: {
      foodDetail (item) {
        this.foodSec = item
        this.$refs.food.show()
      },
      _initScroll () {
        this.meunScroll = new Bscroll(this.$refs.menuWapper, {
          click: true
        })
        this.foodScroll = new Bscroll(this.$refs.foodWapper, {
          probeType: 3,
          click: true
        })
        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
        this._calHeight()
      },
      _calHeight () {
        let foodList = this.$refs.foodWapper.getElementsByClassName('goods-list-hook')
        let height = 0
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      toItem (index) {
        let foodList = this.$refs.foodWapper.getElementsByClassName('goods-list-hook')
        this.foodScroll.scrollToElement(foodList[index], 300)
      }
    },
    computed: {
      selectFood () {
        let foods = []
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      },
      currIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let hei1 = this.listHeight[i]
          let hei2 = this.listHeight[i + 1]
          if (!hei2 || (this.scrollY < hei2 && this.scrollY >= hei1)) {
            return i
          }
        }
        return 0
      }
    }
  }
</script>
