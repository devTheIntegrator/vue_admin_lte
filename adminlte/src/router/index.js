import { createRouter, createWebHistory } from 'vue-router'
import DashboaedView from '../views/DashboardView.vue'
import DatabaseView from '@/views/DatabaseView.vue'
import CanDataView from '@/views/CanDataView.vue'
import UnitOfMeasurementsView from '@/views/UnitOfMeasurementsView.vue'
import GroupProductView from '@/views/GroupProductView.vue'
import ShadesView from '@/views/ShadesView.vue'
import PricingView from '@/views/PricingView.vue'
import DiscountVatView from '@/views/DiscountVatView.vue'
import ImportExportView from '@/views/ImportExportView.vue'

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
  {
    path: '/unit-of-measurements',
    name: 'unit-of-measurements',
    component: UnitOfMeasurementsView
  },
  {
    path: '/group-products',
    name: 'group-products',
    component: GroupProductView
  },
  {
    path: '/shades',
    name: 'shades',
    component: ShadesView
  },
  {
    path: '/pricings',
    name: 'pricings',
    component: PricingView
  },
  {
    path: '/discount-vat',
    name: 'discount-vat',
    component: DiscountVatView
  },
  {
    path: '/import-export',
    name: 'import-export',
    component: ImportExportView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
