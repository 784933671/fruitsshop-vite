import { createStore, createLogger } from 'vuex'
import axiosPromise from './modules/axiosPromise'
import matched from './modules/matched'
import menu from './modules/menu'
const debug = process.env.NODE_ENV !== 'production'
export default createStore({
  modules: {
    axiosPromise,
    matched,
    menu
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})