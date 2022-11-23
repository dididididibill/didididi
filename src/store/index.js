import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lotterytype: 1, // id
  },
  getters: {
    getLotterytype: (state) => {
      return state.lotterytype
    },
  },
  mutations: {
    SET_LOTTERYTYPE(state, id) {
      state.lotterytype = id
    },
  },
  actions: {
    setLotterytype({
      commit
    }, id) {
      commit('SET_LOTTERYTYPE', id)
    },
  },
  plugins: [persistedState({
    storage: window.sessionStorage,
    reducer(val) {
      return {
        // 只储存state中的部分字段
        lotterytype: val.lotterytype,
      }
    }
  })]
})
export default store
