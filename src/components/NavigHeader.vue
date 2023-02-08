<template>
  <div class="header">
    <h1>Просто купить</h1>
    <div class="nav">
      <router-link to="catalog"><p>Каталог</p></router-link>
      <router-link to="cart"><p>Корзина</p></router-link>
      <router-link to="orders"><p>Заказы</p></router-link>
      <router-link  to="login"><p>Вход</p></router-link>
      <router-link to="register"><p>Регистрация</p></router-link>
      <router-link to="logout" @click="logout"><p>Выйти</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
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