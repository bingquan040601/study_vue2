<template>
  <div>
    <section class="hero">
      <div>
        <p class="eyebrow" style="color: #bfe6d2">Vue 2.7 学习项目</p>
        <h1>把知识点变成<br>可以运行的小示例</h1>
        <p>从模板语法开始，逐步掌握组件化开发、页面路由和集中式状态管理。每个页面都可以独立修改和试验。</p>
        <router-link class="btn" to="/basics">从基础语法开始 →</router-link>
      </div>
      <div class="hero-checklist">
        <h2>建议学习方式</h2>
        <ul>
          <li>先预测交互结果，再点击验证</li>
          <li>阅读对应 view 文件中的中文注释</li>
          <li>修改 data，观察视图如何更新</li>
          <li>完成每页底部的练习，而不只看代码</li>
        </ul>
      </div>
    </section>

    <div class="page-header">
      <p class="eyebrow">Learning path</p>
      <h2>推荐学习路线</h2>
    </div>

    <section class="learning-grid" aria-label="学习模块">
      <router-link v-for="item in modules" :key="item.path" :to="item.path" class="card learning-card">
        <span class="step-number">{{ item.step }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <span class="card-link">开始学习 →</span>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      modules: [
        {
          step: 'STEP 01',
          title: '模板与响应式数据',
          description: '插值、指令、事件、表单、计算属性、侦听器与列表渲染。',
          path: '/basics'
        },
        {
          step: 'STEP 02',
          title: '组件与数据通信',
          description: '学习 props 向下传递、自定义事件向上通知，以及 slot 内容分发。',
          path: '/components'
        },
        {
          step: 'STEP 03',
          title: 'Vue Router 路由',
          description: '声明式与编程式导航、动态路由、路由参数和 404 页面。',
          path: '/router'
        },
        {
          step: 'STEP 04',
          title: 'Vuex 状态管理',
          description: '用待办事项理解 state、getters、mutations、actions 和 modules。',
          path: '/vuex'
        }
      ]
    }
  }
}
</script>
