import {createRouter, createWebHistory} from 'vue-router'
import CartView from '../views/CartView.vue'
import OrdersView from '../views/OrdersView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CatalogView from '../views/CatalogView.vue'

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
        component: CartView,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/orders',
        name: 'orders',
        component: OrdersView,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/logout',
        redirect: {name: 'login'}
    },
]

const index = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default index