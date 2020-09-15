import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  frutas: [
  {nombre: 'Piña', cantidad: 4},
  {nombre: 'Tamarindo', cantidad: 6},
  {nombre: 'Mango', cantidad: 8}
  ]
  },
  mutations: {
  aumentar(state, index){
  state.frutas[index].cantidad++
  },
  reiniciar(state){
  state.frutas.forEach(elemento => {
  elemento.cantidad= 0
  })
  }
  },
  actions: {
  },
  modules: {
  }
})
