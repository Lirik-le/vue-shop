<template>
    <div v-if="$store.state.cart.length > 0">
        <div v-for="card in $store.state.cart">
            <h2>{{ card.name }}</h2>
        </div>
    </div>

    <div v-else>
        <a>
            Корзина пуста
        </a>
    </div>
</template>

<script>
export default {
    name: "CartView",
}
</script>

<style scoped>

</style>