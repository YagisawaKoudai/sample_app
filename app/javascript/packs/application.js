import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './router.js';
import App from '../app.vue';
import Routes from '../js-routes.js.erb';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
window.Routes = Routes;

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
  });
});
