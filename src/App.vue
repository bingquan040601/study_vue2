<template>
  <div id="app" class="app-shell">
    <header class="site-header">
      <div class="container header-inner">
        <router-link to="/" class="brand" aria-label="返回学习首页">
          <span class="brand-mark">V2</span>
          <span>
            <strong>Vue 2 学习实验室</strong>
            <small>从基础语法到状态管理</small>
          </span>
        </router-link>

        <nav class="main-nav" aria-label="主导航">
          <router-link to="/" exact>首页</router-link>
          <router-link to="/basics">基础语法</router-link>
          <router-link to="/components">组件通信</router-link>
          <router-link to="/router">路由</router-link>
          <router-link to="/vuex">Vuex</router-link>
        </nav>
      </div>
    </header>

    <main class="container page-content">
      <!-- 当前路由对应的组件会渲染到这里。 -->
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="container">Vue {{ vueVersion }} · 边写边学，动手修改示例观察变化</div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'App',
  data () {
    return {
      vueVersion: Vue.version
    }
  }
}
</script>
