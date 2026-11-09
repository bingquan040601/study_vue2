import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  // 开发环境开启严格模式，帮助发现直接修改 state 的错误写法。
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    todo
  }
})
