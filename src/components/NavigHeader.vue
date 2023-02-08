<template>
  <div id="header">
    <div id="navigation">
      <router-link to="catalog" @click="dropAllBtn(); catalogBtnActive = true" :class="{btn_nav_active : catalogBtnActive}"><p>Каталог</p></router-link>
      <div>●</div>
      <router-link to="cart" @click="dropAllBtn(); cartBtnActive = true" :class="{btn_nav_active : cartBtnActive}"><p>Корзина</p></router-link>
      <div>●</div>
      <router-link to="orders" @click="dropAllBtn(); ordersBtnActive = true" :class="{btn_nav_active : ordersBtnActive}"><p>Заказы</p></router-link>
    </div>
    <div id="registration">
      <router-link v-if="!this.$store.state.TOKEN" to="login" @click="dropAllBtn(); loginBtnActive = true" :class="{btn_auth_active : loginBtnActive}"><p>Войти</p></router-link>
      <router-link v-if="this.$store.state.TOKEN" to="logout" @click="logout">Выйти</router-link>
      <router-link to="register" @click="dropAllBtn(); registrationBtnActive = true" :class="{btn_auth_active : registrationBtnActive}"><p>Регистрация</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data(){
    return {
      catalogBtnActive: true,
      cartBtnActive: false,
      ordersBtnActive: false,
      loginBtnActive: false,
      registrationBtnActive: false,
      get isAuthenticated(){
        return localStorage.getItem('IS_AUTHENTICATED')
      }
    }
  },
  methods: {
    dropAllBtn(){
      this.catalogBtnActive = false
      this.cartBtnActive = false
      this.ordersBtnActive = false
      this.loginBtnActive = false
      this.registrationBtnActive = false

      this.$store.state.AUTH_ERROR = []
    },
    logout(){
      this.$store.dispatch('LOGOUT')
    }
  },

}
</script>

<style scoped>
a{
  text-decoration: none;
}

a:visited{
  all: initial;
}

#header{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#navigation{
  letter-spacing: 2px;
  margin-right: 20px;
  width: 400px;
  height: 40px;
  background-color: mediumseagreen;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

#navigation > div{
  color: green;
}

#navigation p{
  display: block;
  width: 80px;
  color: white;
}

#registration{
  font-family: 'Galatea';
  margin-left: 20px;
  font-size: 1.2em;
  color: dimgray;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn_nav_active p{
  border-bottom: 3px solid white;
}
.btn_auth_active p{
  color: mediumseagreen;
  text-decoration: underline;
  font-size: 1.1em;
}
</style>