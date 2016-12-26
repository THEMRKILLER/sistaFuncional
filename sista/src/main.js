import Vue from 'vue'

Vue.use(require('vue-resource'))
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VeeValidate, { Validator } from 'vee-validate';
//import VueLocalStorage from 'vue-localstorage';
//Vue.use(VueLocalStorage)


import './assets/css/font-awesome.min.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/fullcalendar.min.css'

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

import 'fullcalendar'

import App from 'components/Header'

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

const storage = {
  localStorage: {
      token: {
        type: String,
        default: {
          token: ''
        }
      }
    }
}
const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'en',
    messages: null,
    strict: true
};

Vue.use(VeeValidate, config);


const routes = [
  { path: '/', component: require('components/Home.vue') },
  { path: '/admin', component: require('components/Login.vue') },
  { path: '/dashboard', component: require('components/Dashboard.vue') },
  { path: '*', component: require('components/NotFound.vue') }

  ]

var router = new VueRouter({
    hashbang: false,
    mode: 'history',
    linkActiveClass: "active",
    routes
})

router.mode = 'html5'

const app = new Vue({
    storage,
    router,

    components : {App}
}).$mount('#app')

