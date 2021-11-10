/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Tangtao
 * @Date: 2021-03-23 18:39:08
 * @LastEditors: Seven
 * @LastEditTime: 2021-04-30 23:28:49
 */

import { filterAsyncRoutes } from '@/utils/routerUtils.js'
import Router from '@/router'
import $api from '@/request'
const state = () => ({
  menu: []
})

// getters
const getters = {
  getMenu: (state, getters, rootState) => {
    return state.menu
  }
}
// mutations
const mutations = {
  setMenuMutations (state, params) {
    state.menu = params
  }
}

// actions
const actions = {
  setMenuActions ({ state, commit }) {
    return new Promise(async resolve => {
      $api.post("/test/query2").then(res => {
        if (res.code == 200) {
          const accessedRoutes = filterAsyncRoutes(res.data);
          accessedRoutes.forEach(element => {
            if (Array.isArray(element.children) && element.children.length > 0) {
              element.children.forEach(el => {
                Router.addRoute("home", el)
              })
            }
          });
          Router.addRoute({ path: "/:catchAll(.*)", redirect: '/404' })
          commit('setMenuMutations', accessedRoutes)
          resolve("动态菜单已生成")
        }

      })

    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}