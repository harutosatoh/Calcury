import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      users: [
      ],
      currentSum: [{ number: '0' }],
      payments: [
      ],
      paymentsEach: [
        { number: 0, uid:0 },
        { number: 0, uid:1 },
        { number: 0, uid:2 },
        { number: 0, uid:3 },
      ],
    }),
    mutations: {
      insertUser: (state, obj, uid) => {
        state.users.unshift({
          uid: obj.uid,
          name: obj.name,
          payment: obj.payment,
        })
      },
      insert: (state, obj) => {
        state.payments.unshift({
          number: obj.number,
          content: obj.content,
        })
      },
      insertSum: (state, obj) => {
        state.currentSum.splice(0, 1, { number: obj.totalSum })
      },
      paymentsEach: (state, obj) => {
        state.paymentsEach.splice(obj.uid, 1, { number: obj.number, uid: obj.uid })
      },
      deleteAll: (state) => {
        state.users.length = 0
        state.currentSum.splice(0, 1, { number: 0 })
        state.payments.length = 0
        state.paymentsEach.splice(0, 4, { number: 0 }, { number: 0 }, { number: 0 }, { number: 0 })
      }
    },
    plugins: [createPersistedState()],
  })
}
export default createStore
