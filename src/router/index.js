import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/formation',
      name: 'formation',
      component: AboutView
    },
    {
      path: '/price',
      name: 'price',
      component: AboutView
    },
    {
      path: '/partner',
      name: 'partner',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: AboutView
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: AboutView
    }
  ]
})

export default router
