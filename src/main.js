import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

import HomePage from './components/HomePage.vue'
import BoardView from './components/Board/BoardView.vue'
import LoginPage from './components/LoginPage.vue'

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(VueAxios, axios)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: HomePage,
    },
    {
      path: '/b/:user/:boardname',
      component: BoardView,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
