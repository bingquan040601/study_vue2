<template>
  <div>
    <header class="page-header">
      <p class="eyebrow">04 / Vuex</p>
      <h1>用 Vuex 管理共享状态</h1>
      <p>待办数据放在 store/modules/todo.js 中。组件读取 state/getters，并通过 actions 和 mutations 修改状态。</p>
    </header>

    <article class="card">
      <h2>学习待办 <span class="tag">{{ remainingCount }} 项未完成</span></h2>
      <form class="form-row" @submit.prevent="submitTodo">
        <input v-model="newTodo" class="text-input" placeholder="输入一个学习任务" aria-label="新待办事项">
        <button class="btn" type="submit" :disabled="!newTodo.trim()">添加任务</button>
      </form>

      <div class="filter-bar" aria-label="待办筛选">
        <button
          v-for="item in filters"
          :key="item.value"
          class="btn btn-secondary btn-small"
          :class="{ active: filter === item.value }"
          @click="SET_FILTER(item.value)"
        >
          {{ item.label }}
        </button>
      </div>

      <ul v-if="filteredTodos.length" class="clean-list todo-list">
        <li v-for="todo in filteredTodos" :key="todo.id">
          <label class="field-label" style="flex: 1">
            <input type="checkbox" :checked="todo.done" @change="TOGGLE_TODO(todo.id)">
            <span class="todo-text" :class="{ completed: todo.done }">{{ todo.text }}</span>
          </label>
          <button class="btn btn-danger btn-small" @click="REMOVE_TODO(todo.id)">删除</button>
        </li>
      </ul>
      <p v-else class="empty-state">当前筛选条件下没有任务。</p>

      <div class="form-row" style="margin-top: 16px">
        <button class="btn btn-secondary btn-small" :disabled="!hasCompleted" @click="CLEAR_COMPLETED">
          清除已完成
        </button>
        <span class="muted" style="font-size: 13px">所有修改都通过 mutation 完成</span>
      </div>
    </article>

    <section class="demo-section card">
      <h2>数据流转过程</h2>
      <p class="demo-result">组件 dispatch action → action commit mutation → mutation 修改 state → getter 重新计算 → 视图自动更新</p>
      <p class="code-note">相关文件：<code>src/store/index.js</code>、<code>src/store/modules/todo.js</code>。练习：新增一个 EDIT_TODO mutation，实现任务名称编辑。</p>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'VuexView',
  data () {
    return {
      newTodo: '',
      filters: [
        { label: '全部', value: 'all' },
        { label: '未完成', value: 'active' },
        { label: '已完成', value: 'completed' }
      ]
    }
  },
  computed: {
    // todo 是模块命名空间，避免多个模块出现同名状态或方法。
    ...mapState('todo', ['filter']),
    ...mapGetters('todo', ['filteredTodos', 'remainingCount', 'hasCompleted'])
  },
  methods: {
    ...mapMutations('todo', ['TOGGLE_TODO', 'REMOVE_TODO', 'SET_FILTER', 'CLEAR_COMPLETED']),
    ...mapActions('todo', ['addTodo']),
    submitTodo () {
      if (this.addTodo(this.newTodo)) {
        this.newTodo = ''
      }
    }
  }
}
</script>
