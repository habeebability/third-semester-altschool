import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    val: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    reset(state) {
      state.counter = 0
      state.val = 0
    },
    setValue(state, value) {
      state.counter = value
    }
  }
})
