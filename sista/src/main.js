import Vue from 'vue'

Vue.use(require('vue-resource'))
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VeeValidate, { Validator } from 'vee-validate';


import store from './store'

//import VueLocalStorage from 'vue-localstorage';
//Vue.use(VueLocalStorage)

//import './assets/css/style.css';
import './assets/js/jquery.easing.min.js';
import './assets/js/custom.js';
import './assets/css/font-awesome.min.css';
//import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/fullcalendar.min.css';
import 'jquery-ui/themes/base/all.css'
Vue.component('servicios', require('components/Servicios.vue'));
Vue.component('horario', require('components/Horario.vue'));
Vue.component('fechaInhabil', require('components/FechasInhabiles.vue'));

Vue.component('articulonotfound', require('components/ArticuloNotFound.vue'));


Vue.http.options.root = 'http://localhost/Sista/public/api/v1';

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

import 'fullcalendar'
import 'jquery-ui/ui/widgets/datepicker.js'
import 'jquery-confirm'
var moment = require('moment');
moment().format();
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

  const datepickerconfig = {
            closeText: 'Cerrar',
            prevText: '< Ant',
           nextText: 'Sig >',
           currentText: 'Hoy',
           monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
           monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
           dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
           dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
           dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
           weekHeader: 'Sm',
           dateFormat: 'yy-mm-dd',
           firstDay: 1,
           isRTL: false,
           showMonthAfterYear: false,
           yearSuffix: ''
 };

 $.datepicker.regional['es'] = datepickerconfig;
 $.datepicker.setDefaults($.datepicker.regional['es']);

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


