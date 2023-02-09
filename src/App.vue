<template>
    <navig-header/>
    <router-view/>
</template>

<script>
import NavigHeader from "@/components/NavigHeader";

export default {
    name: 'app',
    components: {
        NavigHeader
    }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>