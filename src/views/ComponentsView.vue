<template>
  <div>
    <header class="page-header">
      <p class="eyebrow">02 / Components</p>
      <h1>组件化与组件通信</h1>
      <p>遵循单向数据流：父组件通过 props 传数据，子组件通过自定义事件通知父组件，不直接修改 props。</p>
    </header>

    <div class="demo-grid">
      <article class="card">
        <h2>Props + 自定义事件</h2>
        <p class="card-description">父组件持有 likes，子组件只负责展示并发出 change 事件。</p>
        <p>父组件当前点赞数：<strong>{{ likes }}</strong></p>

        <CounterPanel
          title="子组件 CounterPanel"
          :count="likes"
          @change="likes = $event"
        >
          <template #footer>
            <span class="tag">这是父组件传入的命名插槽</span>
          </template>
        </CounterPanel>

        <button class="btn btn-secondary btn-small" style="margin-top: 16px" @click="likes = 0">
          父组件重置
        </button>
      </article>

      <article class="card">
        <h2>自定义组件的 v-model</h2>
        <p class="card-description">BaseInput 接收 value，并触发 input 事件，因此可以直接使用 v-model。</p>
        <BaseInput
          v-model="nickname"
          label="学习者昵称"
          placeholder="请输入昵称"
        />
        <p class="demo-result">父组件中的 nickname：{{ nickname || '暂未填写' }}</p>
        <p class="code-note">原生标签上的 <code>v-model</code> 是表单绑定；组件上的 <code>v-model</code> 默认等价于 <code>:value</code> 加 <code>@input</code>。</p>
      </article>
    </div>

    <section class="demo-section card">
      <h2>阅读顺序</h2>
      <ol class="muted">
        <li><code>ComponentsView.vue</code>：父组件如何注册、使用子组件并处理事件。</li>
        <li><code>components/CounterPanel.vue</code>：props 校验、$emit 和 slot。</li>
        <li><code>components/BaseInput.vue</code>：自定义 v-model 的约定。</li>
      </ol>
      <p class="code-note">练习：给 CounterPanel 增加一个“减少”按钮，并保证数量不会小于 0。</p>
    </section>
  </div>
</template>

<script>
import CounterPanel from '@/components/CounterPanel.vue'
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'ComponentsView',
  components: {
    CounterPanel,
    BaseInput
  },
  data () {
    return {
      likes: 3,
      nickname: ''
    }
  }
}
</script>
