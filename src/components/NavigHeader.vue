<template>
    <div class="header">
        <h1>Просто купить</h1>
        <div class="nav">
            <router-link to="catalog"><p>Каталог</p></router-link>
            <router-link @click="toCart" to="cart"><p>Корзина</p></router-link>
            <router-link to="orders"><p>Заказы</p></router-link>
            <router-link v-if="!this.$store.getters.isAuthenticated" to="login"><p>Вход</p></router-link>
            <router-link v-if="!this.$store.getters.isAuthenticated" to="register"><p>Регистрация</p></router-link>
            <router-link v-if="this.$store.getters.isAuthenticated" to="logout" @click="logout"><p>Выйти</p></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "header",
    methods: {
        logout() {
            this.$store.dispatch('logout')
        },
        toCart() {
            this.$store.dispatch('get_cart')
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.nav {
    width: 500px;
    display: flex;
    justify-content: space-around;
}

a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

a.router-link-exact-active {
    color: rgb(248, 98, 36);
}
</style>