<template>
  <div id="loginDiv">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="Пароль">
      <div id="formBtns">
        <router-link to="register">Регистрация</router-link>
        <input type="submit" value="Войти">
      </div>
    </form>
    <p v-if="this.$store.state.AUTH_ERROR.length !== 0" style="color: red">{{this.$store.state.AUTH_ERROR}}</p>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
    return {
      fullName: '',
      email: '',
      password: '',
    }
  },
  methods: {
    login(){
      const USERDATA = {
        email: JSON.parse(JSON.stringify(this.email)),
        password: JSON.parse(JSON.stringify(this.password)),
      }

      this.$store.dispatch('LOGIN', USERDATA)
    }
  }
}
</script>

<style scoped>

#loginDiv{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form{
  margin-top: 100px;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: mediumseagreen;
}
input[type=text], input[type=password], input[type=email]{
  color: white;
  background: transparent;
  border: none;
  padding: 2px;
  outline: none;
  border-bottom: 2px solid white;
}

input[type=text]::placeholder, input[type=password]::placeholder, input[type=email]::placeholder{
  color: white;
}

input[type=text]:focus, input[type=password]:focus, input[type=email]:focus{
  border-bottom: 2px solid forestgreen;
}

#formBtns{
  width: 260px;
  display: flex;
  justify-content: space-around;
}

#formBtns a{
  color: white;
}

input[type=submit]{
  width: 80px;
  height: 30px;
  background-color: forestgreen;
  outline: none;
  color: white;
  border: none;
  border-radius: 5px;
}

input[type=submit]:hover{
  background-color: limegreen;
  color: dimgray;
}
</style>