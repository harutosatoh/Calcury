import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      payments: [{ number: 43 }, { number: 21221 }],
    }),
  })
}
export default createStore
