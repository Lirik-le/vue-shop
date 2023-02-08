<template>
  <form @submit.prevent="saveUser">
    <h2>Регистрация</h2>
    <div>
      <label for="firstName">Имя</label>
      <input id="firstName" v-model="firstName" type="text" placeholder="Георгий">
    </div>
    <div>
      <label for="lastName">Фамилия</label>
      <input id="lastName" v-model="lastName" type="text" placeholder="Горошин">
    </div>
    <div>
      <label for="username">Логин</label>
      <input id="username" v-model="username" type="text" placeholder="User01">
    </div>
    <div>
      <label for="password">Пароль</label>
      <input id="password" v-model="password" type="password" placeholder="*******">
    </div>
    <div>
      <label for="password2">Подтверждение пароля</label>
      <input id="password2" v-model="password2" type="password" placeholder="*******">
    </div>
    <input type="submit" value="Зарегистрироваться">
  </form>
</template>

<script>
import axios from 'axios'

export default {
    name: "RegisterView",
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            password2: '',
        }
    },
    methods: {
        async saveUser() {
            const responce = await axios.post('register', {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                password: this.password,
                password2: this.password2,
            });
            console.log(responce);
        },
    }
}
</script>

<style scoped>
  form > div {
    width: 420px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form > div > label {
    width: 120px;
  }

  form > div > input {
    margin: 10px 0;
    width: 250px;
    height: 30px;
    padding-left: 10px;
    border: 2px solid #2c3e50;
    border-radius: 5px;
  }

  form > div > input:focus {
    outline: none;
    border: 2px solid rgb(248, 98, 36);
  }

  form > input {
    margin: 20px 0;
    width: 200px;
    height: 35px;
    border: 2px solid #2c3e50;
    border-radius: 5px;
    background: rgba(239, 88, 25, 0.8);
    cursor: pointer;
  }
</style>