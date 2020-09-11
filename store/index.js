import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      payments: [
        { number: 43, content: 'レンタカー' },
        { number: 21221, content: '宿泊費' },
      ],
    }),
    mutations: {
      insert: (state, obj) => {
        state.payments.unshift({
          number: obj.number,
          content: obj.content,
        })
      },
    },
  })
}
export default createStore
