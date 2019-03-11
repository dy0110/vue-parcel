import Vue from 'vue';
import MyApp from "./App";
import router from "./router/router";
import store from "./store";

new Vue({
  el: "#app",
  router,
  store,
  render:h => h(MyApp)
});
