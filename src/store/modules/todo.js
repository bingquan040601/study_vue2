const state = () => ({
  todos: [
    { id: 1, text: '理解 state 和 getters', done: true },
    { id: 2, text: '通过 mutation 修改状态', done: false },
    { id: 3, text: '在组件中分发 action', done: false }
  ],
  filter: 'all',
  nextId: 4
})

const getters = {
  filteredTodos (state) {
    if (state.filter === 'active') {
      return state.todos.filter(todo => !todo.done)
    }
    if (state.filter === 'completed') {
      return state.todos.filter(todo => todo.done)
    }
    return state.todos
  },
  remainingCount: state => state.todos.filter(todo => !todo.done).length,
  hasCompleted: state => state.todos.some(todo => todo.done)
}

const mutations = {
  ADD_TODO (state, text) {
    state.todos.push({ id: state.nextId, text, done: false })
    state.nextId += 1
  },
  TOGGLE_TODO (state, id) {
    const todo = state.todos.find(item => item.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  },
  REMOVE_TODO (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  SET_FILTER (state, filter) {
    state.filter = filter
  },
  CLEAR_COMPLETED (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}

const actions = {
  addTodo ({ commit }, text) {
    const value = text.trim()
    if (!value) return false

    commit('ADD_TODO', value)
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
