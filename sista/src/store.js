import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './services/auth.js';
Vue.use(require('vue-resource'))
Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  calendario_id: 1,
  citas_programadas : [],
  variable_prueba : "hola mundo"
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
  logout () { 
    Auth.logout(Vue);
  },
  agregarCitaProgramada(state,payload){

    var id_cita = payload.cita.id;
    var cita = payload.cita;

    if(!state.citas_programadas[id_cita])
    {
      state.citas_programadas[id_cita] = {'title' : cita.title, 'start' : cita.start, 'end': cita.end, 'nombre': cita.cliente_nombre, 'telefono': cita.cliente_telefono, 'email': cita.cliente_email, 'servicio': cita.servicio};
    }

    
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