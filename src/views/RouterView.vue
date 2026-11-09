<template>
  <div>
    <header class="page-header">
      <p class="eyebrow">03 / Vue Router</p>
      <h1>页面路由与导航</h1>
      <p>Vue Router 让 URL 与组件对应起来。本例演示声明式导航、编程式导航、动态参数和查询参数。</p>
    </header>

    <div class="demo-grid">
      <article class="card">
        <h2>声明式导航</h2>
        <p class="card-description">router-link 最终会渲染为 a 标签，并自动处理激活样式。</p>
        <router-link
          class="btn"
          :to="{ name: 'user-profile', params: { id: '7' }, query: { from: 'router-link' } }"
        >
          查看 7 号用户
        </router-link>
        <p class="code-note">路由配置中的路径是 <code>/router/user/:id</code>，其中 <code>:id</code> 是动态参数。</p>
      </article>

      <article class="card">
        <h2>编程式导航</h2>
        <p class="card-description">表单提交后，通过 this.$router.push 跳转，并携带 params 与 query。</p>
        <form class="form-row" @submit.prevent="goToUser">
          <input v-model.trim="userId" class="text-input" placeholder="输入用户 ID" aria-label="用户 ID" required>
          <button class="btn" type="submit" :disabled="!userId">跳转</button>
        </form>
      </article>
    </div>

    <section class="demo-section card">
      <h2>当前路由对象</h2>
      <p class="card-description">$route 包含当前路径、参数和查询字符串等信息。</p>
      <div class="route-code">{{ routeSummary }}</div>
      <p class="code-note">相关文件：<code>src/router/index.js</code> 和 <code>src/views/UserProfileView.vue</code>。试试访问一个不存在的地址，查看通配符路由的效果。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RouterView',
  data () {
    return {
      userId: '42'
    }
  },
  computed: {
    routeSummary () {
      return JSON.stringify({
        path: this.$route.path,
        params: this.$route.params,
        query: this.$route.query
      }, null, 2)
    }
  },
  methods: {
    goToUser () {
      if (!this.userId) return
      this.$router.push({
        name: 'user-profile',
        params: { id: this.userId },
        query: { from: 'programmatic' }
      })
    }
  }
}
</script>
