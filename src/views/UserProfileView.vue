<template>
  <article class="card">
    <p class="eyebrow">Dynamic route</p>
    <h1>用户详情</h1>
    <p class="card-description">这个页面复用同一个组件，通过路由参数展示不同用户。</p>
    <div class="demo-result">
      <p>用户 ID（$route.params.id）：<strong>{{ $route.params.id }}</strong></p>
      <p>来源（$route.query.from）：{{ $route.query.from || '无' }}</p>
      <p>完整路径：{{ $route.fullPath }}</p>
    </div>
    <div class="form-row" style="margin-top: 20px">
      <button class="btn btn-secondary" @click="$router.back()">返回上一页</button>
      <router-link class="btn" to="/router">回到路由示例</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'UserProfileView'
}
</script>
