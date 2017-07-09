// // mongodb
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';

// import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

let user = require('../app/views/user.vue');
let makeorder = require('../app/views/store/makeorder.vue');
let ordersgrid = require('../app/views/store/ordersgrid.vue');

const routes = [
  { path: '/makeorder/', component: makeorder},
  { path: '/makeorder/:change/:id', name: 'makeorder', component: makeorder, props: true },
  { path: '/orders', component: ordersgrid },
  { path: '/orders/id', component: makeorder }
]

const router = new VueRouter({
  routes: routes
})





let myVue = new Vue({
  el: '#myApp',
  router: router,
  components: {
    user: user,
    makeorder: makeorder,
    ordersgrid: ordersgrid
  }
});
