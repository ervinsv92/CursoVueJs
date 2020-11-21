import { createStore } from 'vuex'

export default createStore({
  state: {
    //son la variables globales que definimos
    contador:101
  },
  mutations: {
    //Es la unica forma de cambiar el valor de las varibales que se encuentran en el state
    //las mutaciones no es recomendable que se ejecuten en los componentes, lo mejor es que se llamen desde las acciones
    incrementar(state, payload){
      state.contador += payload
    },
    disminuir(state, payload){
      state.contador -= payload
    }
  },
  actions: {
    //Es ideal que las acciones ejecuten las mutaciones
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    accionBoton({commit}, objeto){
      //solo se puede enviar un parametro de variable
      //para mandar mas de un parametro se utiliza un objeto
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      }else{
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
