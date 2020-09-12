import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      users: [
      ],
      currentSum: [{ number: '0' }],
      payments: [
        { number: 43, content: 'レンタカー' },
        { number: 21221, content: '宿泊費' },
      ],
    }),
    mutations: {
      insertUser: (state, obj, uid) => {
        state.users.unshift({
          uid: uid,
          name: obj.name,
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
      }
    },
  })
}
export default createStore
