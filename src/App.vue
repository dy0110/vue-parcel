<template>
<!-- templateタグ内にコンポーネントを定義 -->
    <div>
        <h1>{{ title }}</h1>    
        <hello-world v-bind:item-name="test"></hello-world>    
    </div>
</template>

<script>
// コンポーネントのデータや子コンポーネント、イベント等を定義する
// ここではApp.vueの子コンポーネントとしてHelloWorld.vueを設定、データを受け渡している
import HelloWorld from './components/HelloWorld';

export default {
    components:{
        HelloWorld
    },
    data() {
        return {
            title: 'テストプロジェクト',
            test: 'Hello World !'
        }
    },
}
</script>

<style scoped>
/* コンポーネントのスタイルを記述  */
/* scoped がついている場合はそのコンポーネント内でのみ有効 */
h1{
    font-family: Arial, Helvetica, sans-serif;
}
</style>
