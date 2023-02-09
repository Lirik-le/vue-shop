<template>
    <form @submit.prevent="register">
        <h2>Регистрация</h2>
        <div>
            <label htmlFor="lastName">Фамилия</label>
            <input id="lastName" v-model="fio" type="text" placeholder="Горошин">
        </div>
        <div>
            <label htmlFor="username">Логин</label>
            <input id="username" v-model="email" type="text" placeholder="User01">
        </div>
        <div>
            <label htmlFor="password">Пароль</label>
            <input id="password" v-model="password" type="password" placeholder="*******">
        </div>
        <input type="submit" value="Зарегистрироваться">
    </form>
</template>

<script>
export default {
    name: "RegisterView",
    data() {
        return {
            fio: '',
            email: '',
            password: '',
        }
    },
    methods: {
        register() {
            const userData = {
                fio: this.fio,
                email: this.email,
                password: this.password,
            };
            this.$store
                .dispatch('register', userData)
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