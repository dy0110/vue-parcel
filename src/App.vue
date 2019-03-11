<template>
    <div>
        <h1>{{ test }}</h1>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 'トップページです'
        }
    },
}
</script>

<style scoped>
    h1{
        color: red;
    }
</style>
