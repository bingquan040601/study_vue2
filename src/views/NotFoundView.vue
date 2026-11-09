<template>
  <section class="card not-found">
    <p class="eyebrow">404</p>
    <h1>没有找到这个页面</h1>
    <p class="muted">当前地址 <code>{{ $route.path }}</code> 没有匹配的路由。</p>
    <router-link class="btn" to="/">返回学习首页</router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>
