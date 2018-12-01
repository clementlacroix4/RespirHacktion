import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/vues/Index'
import Questions from '@/vues/Questions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    }
  ]
})
