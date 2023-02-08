<template>
  <div id="loginDiv">
    <form @submit.prevent="registerValidator">
      <input type="text" v-model="fullName" placeholder="ФИО">
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="Пароль">
      <div id="formBtns">
        <router-link to="login">Вход</router-link>
        <input type="submit" value="Зарегистрироваться">
      </div>
    </form>
    <p style="color: red" v-for="error in registerErrors" v-bind:key="error">{{error}}</p>
    <p style="color: red" v-if="this.$store.state.AUTH_ERROR.length !== 0">{{this.$store.state.AUTH_ERROR}}</p>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data(){
    return{
      fullName: '',
      email: '',
      password: '',
      registerErrors: [],
    }
  },
  methods: {
    register(){
      let USERDATA = {
        fio: JSON.parse(JSON.stringify(this.fullName)),
        email: JSON.parse(JSON.stringify(this.email)),
        password: JSON.parse(JSON.stringify(this.password)),
      }

      this.$store.dispatch('REGISTER', USERDATA)
    },
    registerValidator(){
      this.registerErrors = []

      if(!this.fullName && !this.email && !this.password) {
        this.registerErrors.push('*все поля должны быть заполнены')
      }else{
        if(this.password.length < 6){
          this.registerErrors.push('*пароль должен быть длинее 6 символов')
        }
        if(!this.password.indexOf(' ')===-1){
          this.registerErrors.push('*пароль не может содержать пробелы')
        }
        if(this.email.indexOf('@')===-1){
          this.registerErrors.push('*электронная почта должна содержать символ "@"')
        }
        if(!this.email.indexOf(' ')===-1){
          this.registerErrors.push('*электронная почта не может содержать пробелы')
        }
        if(this.fullName.split(' ').length !== 3){
          this.registerErrors.push('ФИО должно состоять из фамилии, имени и отчества (3 слова)')
        }
      }


      if(this.registerErrors.length===0){
        this.register()
      }
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
  width: 140px;
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