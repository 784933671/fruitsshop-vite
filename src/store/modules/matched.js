/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Tangtao
 * @Date: 2021-03-23 18:39:08
 * @LastEditors: Seven
 * @LastEditTime: 2021-03-23 20:59:47
 */
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  matched: []
})

// getters
const getters = {
  getMatched: (state, getters, rootState) => {
    return state.matched
  }
}
// mutations
const mutations = {
  setMatchedMutations (state, params) {
    state.matched = params
  }
}

// actions
const actions = {
  setMatchedActions ({ state, commit }, params) {
    const breadcrumbList = []
    params.forEach(e => {
      breadcrumbList.push({ path: e.path, ...e.meta })
    })
    commit('setMatchedMutations', breadcrumbList)
  }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}