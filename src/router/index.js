import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import CatalogView from '../views/CatalogView.vue'
import LoginView from '../views/LoginView.vue'
import OrdersView from '../views/OrdersView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '',
    redirect: {name: 'catalog'}
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
