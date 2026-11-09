<template>
  <div>
    <header class="page-header">
      <p class="eyebrow">01 / Template & Reactivity</p>
      <h1>基础语法与响应式数据</h1>
      <p>本页使用 Options API。重点观察：data 中的数据变化后，模板、计算属性和侦听器如何联动。</p>
    </header>

    <section class="demo-section">
      <h2>1. 插值、属性绑定与事件</h2>
      <div class="demo-grid">
        <article class="card">
          <h3>文本插值 <span class="tag" v-pre>{{ }}</span></h3>
          <p class="card-description">message 来自组件的 data，修改输入框也会同步改变它。</p>
          <input v-model="message" class="text-input" aria-label="消息内容">
          <p class="demo-result">{{ message }}</p>
          <p class="muted">输入内容倒序：{{ reversedMessage }}</p>
        </article>

        <article class="card">
          <h3>事件绑定 <span class="tag">v-on / @</span></h3>
          <p class="card-description">点击按钮调用 methods 中的方法，计算属性会基于 count 自动更新。</p>
          <div class="counter-value">{{ count }}</div>
          <p>双倍计数：{{ doubleCount }}</p>
          <p class="muted">{{ countWatchMessage }}</p>
          <div class="form-row">
            <button class="btn" @click="increment">count + 1</button>
            <button class="btn btn-secondary" @click="count = 0">重置</button>
          </div>
        </article>
      </div>
    </section>

    <section class="demo-section">
      <h2>2. 条件与列表渲染</h2>
      <div class="demo-grid">
        <article class="card">
          <h3>条件渲染 <span class="tag">v-if / v-show</span></h3>
          <div class="form-row">
            <button class="btn btn-secondary" @click="showDetail = !showDetail">切换 v-if</button>
            <button class="btn btn-secondary" @click="showHint = !showHint">切换 v-show</button>
          </div>
          <p v-if="showDetail" class="demo-result">v-if：条件为 false 时，这个元素不会渲染到 DOM。</p>
          <p v-show="showHint" class="demo-result">v-show：通过 CSS display 控制显示，元素始终存在于 DOM。</p>
        </article>

        <article class="card">
          <h3>列表渲染 <span class="tag">v-for</span></h3>
          <form class="form-row" @submit.prevent="addSkill">
            <input v-model.trim="newSkill" class="text-input" placeholder="例如：生命周期" aria-label="新知识点">
            <button class="btn" :disabled="!newSkill" type="submit">添加</button>
          </form>
          <ul class="clean-list skill-list">
            <li v-for="(skill, index) in skills" :key="skill">
              <span>{{ index + 1 }}. {{ skill }}</span>
              <button class="btn btn-danger btn-small" @click="removeSkill(index)">删除</button>
            </li>
          </ul>
          <p v-if="skills.length === 0" class="empty-state">列表为空，请添加一个知识点。</p>
        </article>
      </div>
    </section>

    <section class="demo-section">
      <h2>3. 表单双向绑定</h2>
      <article class="card">
        <p class="card-description">v-model 会根据表单控件类型自动处理 value、checked 或 selected。</p>
        <div class="demo-grid">
          <div>
            <div class="form-row">
              <input v-model.trim="username" class="text-input" placeholder="你的昵称" aria-label="昵称">
            </div>
            <div class="form-row">
              <label class="field-label"><input v-model="accepted" type="checkbox"> 接受学习挑战</label>
              <label class="field-label">目标
                <select v-model="goal" class="text-input">
                  <option disabled value="">请选择</option>
                  <option>掌握基础</option>
                  <option>独立完成项目</option>
                  <option>理解原理</option>
                </select>
              </label>
            </div>
          </div>
          <div class="demo-result">
            <p>昵称：{{ username || '暂未填写' }}</p>
            <p>接受挑战：{{ accepted ? '是' : '否' }}</p>
            <p>学习目标：{{ goal || '暂未选择' }}</p>
          </div>
        </div>
      </article>
    </section>

    <section class="demo-section card">
      <h2>本页代码入口</h2>
      <p class="card-description">查看 <code>src/views/BasicsView.vue</code>：重点阅读 data、computed、watch 和 methods，并在 mounted 生命周期中查看初始化逻辑。</p>
      <p class="demo-result">组件挂载时间：{{ mountedAt }}</p>
      <p class="code-note">练习：新增一个“清空列表”按钮；再添加一个计算属性，统计已掌握的知识点数量。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BasicsView',
  data () {
    return {
      message: '你好，Vue 2！',
      count: 0,
      countWatchMessage: '点击计数按钮，观察 watch 的输出。',
      showDetail: true,
      showHint: true,
      newSkill: '',
      skills: ['模板语法', '计算属性', '组件通信'],
      username: '',
      accepted: false,
      goal: '',
      mountedAt: ''
    }
  },
  computed: {
    // 计算属性会缓存结果，只有依赖的数据变化时才会重新计算。
    reversedMessage () {
      return this.message.split('').reverse().join('')
    },
    doubleCount () {
      return this.count * 2
    }
  },
  watch: {
    // 侦听器适合在数据变化后执行异步操作或开销较大的逻辑。
    count (newValue, oldValue) {
      this.countWatchMessage = `count 从 ${oldValue} 变为 ${newValue}`
    }
  },
  mounted () {
    this.mountedAt = new Date().toLocaleTimeString()
  },
  methods: {
    increment () {
      this.count += 1
    },
    addSkill () {
      if (!this.newSkill) return
      if (this.skills.includes(this.newSkill)) {
        this.newSkill = ''
        return
      }
      this.skills.push(this.newSkill)
      this.newSkill = ''
    },
    removeSkill (index) {
      this.skills.splice(index, 1)
    }
  }
}
</script>
