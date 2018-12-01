import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/vues/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
