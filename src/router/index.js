import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/vues/Index'
import Questions from '@/vues/Questions'
import Homepage from '@/vues/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: Homepage
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    }
  ]
})
