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
      component: HomeView
    },
    {
      path: '/price',
      name: 'price',
      component: HomeView
    },
    {
      path: '/partner',
      name: 'partner',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomeView
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: AboutView
    }
  ]
})

export default router
