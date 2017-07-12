import Vue from 'vue'
import Router from 'vue-router'
import Good from '@/components/good'
import Rating from '@/components/rating'
import Seller from '@/components/seller'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/good',
      name: 'good',
      component: Good
    },
    {
      path: '/rating',
      name: 'rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})

