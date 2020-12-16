import { callGetDummy } from '@/api/dummy'

const state = {
  dummy: ''
}
const mutations = {
  setDummy (state, value) {
    state.dummy = value
  }
}
const actions = {
  getDummy ({ commit }) {
    callGetDummy(res => {
      commit('setDummy', res.body.data)
    })
  }
}
const getters = {
  dummy (state) {
    return state.dummy
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
