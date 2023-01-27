import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SchoolView from '../views/SchoolView.vue'
import PriceView from '../views/PriceView.vue'
import PartnerView from '../views/PartnerView.vue'
import ContactView from '../views/ContactView.vue'
import CandidateView from '../views/CandidateView.vue'
import FormationView from '../views/FormationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/school',
      name: 'school',
      component: SchoolView
    },
    {
      path: '/formation',
      name: 'formation',
      component: FormationView
    },
    {
      path: '/price',
      name: 'price',
      component: PriceView
    },
    {
      path: '/partner',
      name: 'partner',
      component: PartnerView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: CandidateView
    }
  ]
})

export default router
