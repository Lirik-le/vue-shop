<template>
    <div>
        <h2>Корзина: {{ $store.state.cartCount }}</h2>
    </div>
    <div v-if="this.$store.state.cart.length > 0">
        <div class="card" v-for="card in this.$store.state.cart">
            <div>
                <p>{{ card.name }}</p>
                <div>
                    <p>{{ card.price }} &#8381;</p>
                    <h2 @click="deleteCard(card)" class="cross">+</h2>
                </div>
            </div>
            <hr>
        </div>
        <div>
            <p>{{ fullSum }} &#8381;</p>
            <button>Оформить заказ</button>
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
    data() {
        return {
            sum: 0
        }
    },
    methods: {
        deleteCard(card) {
            this.$store.dispatch('from_cart', card.id)
            this.$store.dispatch('get_cart')
        },
    },
    computed: {
        fullSum() {
            this.sum = 0
            this.$store.state.cart.forEach(card => {
                this.sum+=card.price
                console.log(this.sum)
            })
            return this.sum
        }
    }
}
</script>

<style scoped>
.card {
    width: 1000px;
    margin: 0 auto;
}

.card > div {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
}

.card > div > div {
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cross {
    transform: rotate(45deg);
    cursor: pointer;
}

button {
    color: #2c3e50;
    width: 200px;
    height: 32px;
    margin: 10px 0;
    font-size: 16px;
    border: 2px solid #2c3e50;
    border-radius: 5px;
    background: rgb(248, 98, 36, .8);
    cursor: pointer;
}
</style>
