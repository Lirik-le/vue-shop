import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import OrdersView from '../views/OrdersView.vue'
import RegisterView from '../views/RegisterView.vue'
import store from '../store'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

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
    component: function () {
      return import('../views/CatalogView.vue')
    },
    beforeEnter: ifAuthenticated
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    },
    beforeEnter: ifNotAuthenticated
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

const index = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default index