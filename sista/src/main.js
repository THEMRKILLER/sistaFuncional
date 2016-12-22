import Vue from 'vue'

Vue.use(require('vue-resource'))
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VeeValidate, { Validator } from 'vee-validate';

import './assets/css/font-awesome.min.css'
import './assets/css/style.css'
import './assets/bootstrap/css/bootstrap.min.css'
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
  { path: '/', component: require('components/Home.vue') },
  { path: '/admin', component: require('components/Login.vue') }
  ]

var router = new VueRouter({
    hashbang: false,
    mode: 'history',
    linkActiveClass: "active",
    routes
})

router.mode = 'html5'

const app = new Vue({
    router,
    
    components : {App}
}).$mount('#app')

