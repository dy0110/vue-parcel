<template>
  <div>
    <p class="hello_world">{{ itemName }}</p>
  </div>
</template>

<script>
// App.vueの子コンポーネントとして親から受け取った情報を表示する
export default {
  props: {
    itemName: {
      type: String
    }
  }
};
</script>

<style scoped>
    .hello_world{
        font-size: 100%;
    }
</style>
