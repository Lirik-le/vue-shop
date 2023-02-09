import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";

export default createStore({
    state: {
        token: localStorage.getItem('token'),
        API: 'https://jurapro.bhuser.ru/api-shop/',
        cart: [],
        cartCount: 0
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    mutations: {
        auth_success: (state, token) => {
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.token = '';
        },
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);

            if (!found) {
                state.cart.push(item);
            }

            state.cartCount++;
            console.log(state.cart)
        }
    },
    actions: {
        async ADDTOCARD({commit}, user) {
            try {
                await axios.post(this.state.API + 'cart/' + product_id).then((response) => {
                    commit('auth_success', this.state.token)
                    this.state.token = response.data.data.token
                    localStorage.setItem('token', this.state.token)
                    axios.defaults.headers = {Authorisation: this.state.token}
                    router.push('/')
                })
            } catch (error) {
                commit('AUTH_ERROR');
                localStorage.removeItem('token');
            }
        },
        async LOGIN({commit}, user) {
            try {
                await axios.post(this.state.API + 'login', user).then((response) => {
                    this.state.token = response.data.data.user_token
                    localStorage.setItem('token', this.state.token)
                    axios.defaults.headers = {Authorisation: this.state.token}
                    router.push('/')
                })
            } catch (error) {
                commit('AUTH_ERROR');
                localStorage.removeItem('token');
            }
        },
        async REGISTER({commit}, user) {
            try {
                await axios.post(this.state.API + 'signup', user).then((response) => {
                    this.state.token = response.data.data.token
                    localStorage.setItem('token', this.state.token)
                    axios.defaults.headers = {Authorisation: this.state.token}
                    router.push('/')
                })
            } catch (error) {
                commit('AUTH_ERROR');
                localStorage.removeItem('token');
            }
        },
        async LOGOUT() {
            localStorage.removeItem('token', this.state.token)
            this.state.token = '';
            await axios.get(this.state.API + 'logout')
        }
    },
})