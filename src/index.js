// Vueオブジェクトの定義を行い、App.vueを表示させます
import Vue from 'vue';
import App from "./App";

new Vue({
  el: "#app",
  components: {
    App
  },
  template: '<app></app>'
})
