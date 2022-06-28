import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.ce.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('./views/About.ce.vue'),
    },
  ],
})
