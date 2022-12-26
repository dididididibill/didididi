import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lotterytype: 1, // 彩种id
    tabindex: 0, // 资讯统计tab
  },
  getters: {
    getLotterytype: (state) => {
      return state.lotterytype
    },
    getTabindex: (state) => {
      return state.tabindex
    },
  },
  mutations: {
    SET_LOTTERYTYPE(state, id) {
      state.lotterytype = id
    },
    SET_TABINDEX(state, id) {
      state.tabindex = id
    },
  },
  actions: {
    setLotterytype({
      commit
    }, id) {
      commit('SET_LOTTERYTYPE', id)
    },
    setTabindex({
      commit
    }, id) {
      commit('SET_TABINDEX', id)
    },
  },
  plugins: [persistedState({
    storage: window.sessionStorage,
    reducer(val) {
      return {
        // 只储存state中的部分字段
        lotterytype: val.lotterytype,
        tabindex: val.tabindex,
      }
    }
  })]
})
export default store
