<template>
  <div class="rating-box">
    <div class="rat-title flex">
      <div class="zhpf">
        <p class="rat-num">{{mean}}</p>
        <p>综合评分</p>
      </div>
      <div class="rat-detail flex1">
        <div class="star">
          <span :class="mean>0 ? 'on' : ''"></span>
          <span :class="mean>1 ? 'on' : ''"></span>
          <span :class="mean>2? 'on' : ''"></span>
          <span :class="mean>3 ? 'on' : ''"></span>
          <span :class="mean>4 ? 'on' : ''"></span>
        </div>
        <div class="strat-group">送达时间 {{meanTime}} 分钟</div>
      </div>
    </div>
    <div class="space"></div>
    <div class="rat-list-box">
      <ul class="rat-status">
        <li @click="status=9" :class="status===9 ? 'active':''">全部</li>
        <li @click="status=2" :class="status===2 ? 'active':''">满意</li>
        <li @click="status=0" :class="status===0 ? 'active':''">不满意</li>
      </ul>
      <div class="rat-list flex" v-for="value in ratings" v-if="choseStaus(value)">
        <div class="head"><img :src="value.avatar" alt=""></div>
        <div class="main flex1">
          <div class="top">
            <p class="name fl">{{value.username}}</p>
            <p class="time fr">{{value.rateTime}}</p>
          </div>
          <div class="clearfix">
            <div class="star fl">
              <span :class="value.score>0 ? 'on' : ''"></span>
              <span :class="value.score>1 ? 'on' : ''"></span>
              <span :class="value.score>2? 'on' : ''"></span>
              <span :class="value.score>3 ? 'on' : ''"></span>
              <span :class="value.score>4 ? 'on' : ''"></span>
            </div>
            <div class="fl" v-if="value.deliveryTime">{{value.deliveryTime}} 分钟送达</div>
          </div>
          <p class="leiron">{{value.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .clearfix {
    clear: both;
    overflow: hidden;
  }
  .rating-box {
    font-size: 14px;
  }
  .rat-title {
    padding: 14px;
    border-bottom: 1px solid #ddd;
  }
  .space {
    width: 100%;
    height: 20px;
    background-color: #eee;
  }
  .zhpf {
    width: 136px;
    text-align: center;
  }
  .rat-status {
    overflow: hidden;
    padding: 14px;
  }
  .rat-status li {
    float: left;
    margin-right: 10px;
    padding: 5px 7px;
    background-color: #ccecf8;
    color: #000;
  }
  .rat-status .active {
    background-color: #00a0dc;
    color: #fff;
  }
  .rat-list {
    padding: 15px;
    text-align: left;
    font-size: 12px;
  }
  .rat-list .head {
    flex: 0 0 24px;
    height: 24px;
    padding-right: 15px;
    border-radius: 50%;
  }
  .rat-list .top {
    overflow: hidden;
    margin-bottom: 5px;
  }
  .rat-list .head img{
    width: 100%;
    height: 100%;
  }
  .star {
    margin-right: 10px;
  }
  .star span{
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url("../assets/staroff.png");
    background-size: 15px;
  }
  .star .on {
    background-image: url("../assets/staron.png");
  }

</style>
<script>
  export default{
    data () {
      return {
        ratings: [],
        mean: 0,
        meanTime: 0,
        status: 9
      }
    },
    created () {
      this.$http.get('/api/ratings').then(response => {
        // get body data
        this.ratings = response.data.data
        console.log(this.ratings)
        let total = 0
        let totalTime = 0
        this.ratings.forEach((item) => {
          total += item.score
          totalTime += parseInt(item.deliveryTime)
        })
        this.mean = (total / this.ratings.length).toFixed(1)
        this.meanTime = (totalTime / this.ratings.length).toFixed(0)
      }, response => {
        // error callback
      })
    },
    methods: {
      choseStaus (value) {
        if (this.status === 9) {
          return true
        } else if (this.status === 2) {
          if (value.score > 2) {
            return true
          }
        } else if (this.status === 0) {
          if (value.score < 3) {
            return true
          }
        }
      }
    }
  }
</script>
