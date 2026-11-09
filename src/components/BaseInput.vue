<template>
  <label class="field-label" style="display: block">
    <span style="display: block; margin-bottom: 6px">{{ label }}</span>
    <!-- 自定义 v-model：接收 value prop，并在输入时触发 input 事件。 -->
    <input
      :value="value"
      class="text-input"
      type="text"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '输入内容'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
