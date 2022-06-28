import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    counter: 0
  }),
  actions: {
    increment({ commit }) {
      commit('INCREMENT_COUNT')
    }
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.counter++
    }
  }
})