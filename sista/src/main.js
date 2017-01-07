import Vue from 'vue'

Vue.use(require('vue-resource'))
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VeeValidate, { Validator } from 'vee-validate';


import store from './store'

//import VueLocalStorage from 'vue-localstorage';
//Vue.use(VueLocalStorage)

import './assets/css/style.css';
import './assets/js/jquery.easing.min.js';
import './assets/js/custom.js';
import './assets/css/font-awesome.min.css';
//import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/fullcalendar.min.css';
import 'jquery-confirm/css/jquery-confirm.css';

Vue.component('servicios', require('components/Servicios.vue'));
Vue.component('horario', require('components/Horario.vue'));
Vue.component('articulonotfound', require('components/ArticuloNotFound.vue'));


Vue.http.options.root = 'http://192.168.0.14/Sista/public/api/v1';

var $ = require('jquery');
window.jQuery = $;
window.$ = $;


import 'bootstrap'
import 'jquery-confirm'
import 'fullcalendar'

import App from 'components/Header'


const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'en',
    messages: null,
    strict: true
};



Vue.use(VeeValidate, config);


const routes = [
  { path: '/', component: require('components/Home.vue')},
  { path: '/admin', component: require('components/Login.vue') },
  { path: '/dashboard', component: require('components/Dashboard.vue'),name: 'auth-required' },
  { path: '/settings', component: require('components/Settings.vue'),name: 'auth-required' },
  { path: '/redactar', component: require('components/Redactador.vue'),name: 'auth-required' },
  { path: '/articulo/:id', component: require('components/Articulo.vue')},
  { path: '/articulos', component: require('components/Articulos.vue')},
  { path: '*', component: require('components/NotFound.vue') }

  ]

export var router = new VueRouter({
    hashbang: false,
    mode: 'history',
    linkActiveClass: "active",
    routes
})

router.mode = 'html5';
import Auth from './services/auth.js';

router.beforeEach((r, redirect, next) => {
  if(r.name === 'auth-required')
  {
     if(localStorage.getItem('token') !== null) next();
      else Auth.logout();
  }
  else{
    if (r.path === '/admin'){
        if(localStorage.getItem('token') == null) next();
        else router.push('dashboard')
  }
  
  next()
}


})


const app = new Vue({
    store,
    router,
    components : {App}
}).$mount('#app')


