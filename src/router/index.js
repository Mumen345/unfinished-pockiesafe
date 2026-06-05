import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StokvelView from '../views/StokvelView.vue'
import FlexRandView from '../views/FlexRandView.vue'
import SecurityView from '../views/SecurityView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/stokvel',
    name: 'stokvel',
    component: StokvelView
  },
  {
    path: '/flexrand',
    name: 'flexrand',
    component: FlexRandView
  },
  {
    path: '/security',
    name: 'security',
    component: SecurityView
  }
]})

export default router