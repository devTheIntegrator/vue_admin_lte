import { createRouter, createWebHistory } from 'vue-router'
import DashboaedView from '../views/DashboardView.vue'
import DatabaseView from '@/views/DatabaseView.vue'
import CanDataView from '@/views/CanDataView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboaedView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboaedView
  },
  {
    path: '/database',
    name: 'database',
    component: DatabaseView
  },
  {
    path: '/can-data',
    name: 'can-data',
    component: CanDataView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
