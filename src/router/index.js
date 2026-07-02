import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StokvelView from '../views/StokvelView.vue'
import FlexRandView from '../views/FlexRandView.vue'
import SecurityView from '../views/SecurityView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyView from '../views/PrivacyPolicyView.vue'
import TermsView from '../views/TermsView.vue'
import FAQsView from '../views/FAQsView.vue'

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
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsView
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: FAQsView
  },
]})

export default router