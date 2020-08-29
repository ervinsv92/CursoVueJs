import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '../firebase';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    tareas: [],
    tarea: { nombre: '', id: '' }
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
    },
    setEliminarTarea(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    crearUsuario({ commit }, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          console.log(res)
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuario)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    ingresoUsuario({ commit }, usuario) {
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          console.log(res)
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuario)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    cerrarSesion({ commit }) {
      auth.signOut()
      router.push('/ingreso')
    },
    detectarUsuario({ commit }, usuario) {
      commit('setUsuario', usuario);
    },
    getTareas({ commit }) {
      const tareas = []
      db.collection('tareas').get().then(res => {
        res.forEach(doc => {
          //console.log(doc.id);
          //console.log(doc.data());
          let tarea = doc.data();
          tarea.id = doc.id;
          tarea.nombre = tarea.nombre;
          tareas.push(tarea)
        });

        commit('setTareas', tareas)
      });
    },
    getTarea({ commit }, idTarea) {
      db.collection('tareas').doc(idTarea).get()
        .then(doc => {
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)
        })
    },
    editarTarea({ commit }, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
        .then(() => {
          router.push('/')
        })
    },
    agregarTarea({ commit }, nombreTarea) {
      db.collection('tareas').add({
        nombre: nombreTarea
      }).then(doc => {
        router.push('/')
      })
    },
    eliminarTarea({ commit, dispatch }, idTarea) {
      db.collection('tareas').doc(idTarea).delete()
        .then(() => {
          //dispatch('getTareas')//ejecuta una accion que se encuentre en vuex
          commit('setEliminarTarea', idTarea)
        })
    }
  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {
  }
})
