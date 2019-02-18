import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'contact',
          name: 'contact',
          component: () => import('./views/contact.vue')
        },
        {
          path: 'skill',
          name: 'skill',
          component: () => import('./views/skill.vue')
        },
        {
          path: 'resume',
          name: 'resume',
          component: () => import('./views/resume.vue')
        },
        {
          path: 'status',
          name: 'status',
          component: () => import('./views/status.vue')
        },
      ]
    },

  ]
})
