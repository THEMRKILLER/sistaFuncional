import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './services/auth.js';
Vue.use(require('vue-resource'))
Vue.use(Vuex)
var io = require("socket.io-client");
window.io = io;

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  calendario_id2: 1,
  calendario_id : null,
  user : null,
  socket : io.connect('http://192.168.0.12:3000'),
  citas_programadas : [],
  //articulos: [],
  variable_prueba : "hola mundo",
  progress: 0,
  error: false,
  direction: 'right',
  header : true,
  height_header : 0,
}


//citas_programadas =['1' : {'nombre' : 'Julio Jaramillo', 'start' : '2017-01-03'} , '2' : {'nombre' : 'Homero ' ,  ....} ];
/*
id_cita = 1 
 
 var cita = citas_programadas[id_cita] 

if(cita)
´,
,
,
else 
,
,
,
*/

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setidcalendario (state,payload){
    state.calendario_id = payload.calendario_id;
  },
  logout (state,payload) { 
    Auth.logout(payload.vm);
  },
  setuser (state, payload) {
    state.user = payload.user

  },
  resetuser (state)
  {
    state.user = null;
    state.calendario_id = null;

  },
  changeheadermain(state){
    state.header = false;
  },
  changeheader(state){
    state.header = true;
  },
  aumentarPorcentaje(state, payload){
    state.progress = payload.porcentaje;
    console.log("state progress: " + state.progress);
  },
  //state acceder a las constantes
  //payload contiene los parametros que le pase en cualquier componente
  agregarCitaProgramada(state,payload){

    var id_cita = payload.cita.id;
    var cita = payload.cita;

    if(!state.citas_programadas[id_cita])
    {
      state.citas_programadas[id_cita] = {'title' : cita.title, 'start' : cita.start, 'end': cita.end, 'nombre': cita.cliente_nombre, 'telefono': cita.cliente_telefono, 'email': cita.cliente_email, 'servicio': cita.servicio};
    }

    
  },
  onresize(state)
  {
    console.log("Llamado a on resize");
    state.height_header = $('#header-nav').height()-55;
    $('#viewer').css('margin-top',state.height_header+'px');
  }
  /**
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
  */
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  
  /**
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
  */
}

// getters are functions
const getters = {
  
  //evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'

}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})