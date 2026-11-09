<template>
  <div class="demo-result">
    <h3>{{ title }}</h3>
    <p>子组件通过 props 收到：<strong>{{ count }}</strong></p>
    <button class="btn btn-small" @click="$emit('change', count + 1)">
      通知父组件 +1
    </button>
    <div style="margin-top: 12px">
      <!-- 父组件可以向这个插槽传入任意模板。 -->
      <slot name="footer">这是没有传入插槽内容时的默认文本。</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterPanel',
  props: {
    title: {
      type: String,
      default: '计数面板'
    },
    count: {
      type: Number,
      required: true,
      validator: value => value >= 0
    }
  }
}
</script>
