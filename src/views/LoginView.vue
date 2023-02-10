<template>
    <form @submit.prevent="login">
        <h2>Вход</h2>
        <div>
            <label for="username">Почта</label>
            <input id="username" v-model="email" type="text" placeholder="User01">
        </div>
        <div>
            <label for="password">Пароль</label>
            <input id="password" v-model="password" type="password" placeholder="*******">
        </div>
        <input type="submit" value="Войти">
    </form>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            email: this.email,
            password: this.password,
        }
    },
    methods: {
        login() {
            const userData = {
                email: JSON.parse(JSON.stringify(this.email)),
                password: JSON.parse(JSON.stringify(this.password)),
            };
            this.$store
                .dispatch('login', userData)
        },
    }
}
</script>

<style scoped>
form > div {
    width: 340px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    width: 80px;
    height: 30px;
    border: 2px solid #2c3e50;
    border-radius: 5px;
    background: rgba(239, 88, 25, 0.8);
    cursor: pointer;
}
</style>