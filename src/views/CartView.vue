<template>
    <div>
        <h2>Корзина: {{ $store.state.cartCount }}</h2>
    </div>
    <div v-if="cart.length > 0">
        <div v-for="card in cart">
            <p>{{ card }}</p>
        </div>
    </div>

    <div v-else>
        <p>
            Корзина пуста
        </p>
    </div>
</template>

<script>
export default {
    name: "CartView",
    computed: {
        cart() {
            let uniqueCart = [];

            for (let str of this.$store.state.cart) {
                if (!uniqueCart.includes(str)) {
                    uniqueCart.push(str);
                }
            }
            console.log(uniqueCart)
            console.log(this.$store.state.cart.length)
            return new Set(this.$store.state.cart)
        }
    }
}
</script>

<style scoped>

</style>