# Vue 2 学习实验室

一个使用 **Vue 2.7 + Vue CLI 5** 搭建的中文学习项目，覆盖模板语法、组件通信、Vue Router 和 Vuex。

> Vue 2 已于 2023 年 12 月 31 日结束官方维护。本项目适合学习 Vue 2 或维护旧项目；新的生产项目建议评估 Vue 3。

## 环境要求

- Node.js 16 或更高版本
- npm 8 或更高版本

## 启动项目

```bash
npm install
npm run serve
```

终端显示本地地址后，在浏览器中打开，默认是 <http://localhost:8080>。

修改 `src` 中的代码后，开发服务器会自动更新页面。

## 构建生产版本

```bash
npm run build
```

构建结果位于 `dist/`。项目使用 history 路由模式，部署到服务器时需要将未知路径回退到 `index.html`；仅本地学习时无需额外配置。

## 学习路线

| 顺序 | 页面 | 主要知识点 |
| --- | --- | --- |
| 1 | 基础语法 | 插值、v-bind、v-on、v-model、v-if、v-show、v-for、computed、watch、生命周期 |
| 2 | 组件通信 | props、自定义事件、自定义 v-model、slot、单向数据流 |
| 3 | 路由导航 | router-link、router-view、$router、$route、动态参数、查询参数、404 |
| 4 | Vuex | state、getters、mutations、actions、modules、辅助函数 |

## 目录结构

```text
vue2-learning/
├── public/
│   └── index.html             # HTML 入口
├── src/
│   ├── assets/styles/         # 全局样式
│   ├── components/            # 可复用组件
│   │   ├── BaseInput.vue
│   │   └── CounterPanel.vue
│   ├── router/index.js        # 路由配置与标题守卫
│   ├── store/
│   │   ├── index.js           # Vuex Store 入口
│   │   └── modules/todo.js    # 待办事项模块
│   ├── views/                 # 路由页面与学习示例
│   ├── App.vue                # 根组件与整体布局
│   └── main.js                # Vue 应用入口
├── babel.config.js
├── jsconfig.json              # 编辑器 @ 路径别名提示
├── vue.config.js              # Vue CLI 配置
└── package.json
```

## Vue 2 组件的基本结构

```vue
<template>
  <!-- 页面结构：只能依赖当前组件可访问的数据和方法 -->
</template>

<script>
export default {
  name: 'ExampleComponent',
  components: {}, // 注册局部组件
  props: {},      // 父组件传入的数据
  data () {       // 组件内部状态，必须写成函数并返回对象
    return {}
  },
  computed: {},   // 基于依赖计算的派生数据
  watch: {},      // 数据变化后的额外处理
  methods: {}     // 事件处理与普通方法
}
</script>

<style scoped>
/* scoped 表示样式尽量只作用于当前组件 */
</style>
```

## 学习建议

1. 每学习一个知识点，先修改已有示例，再写一个自己的小示例。
2. 在 Vue Devtools 中观察组件数据、路由和 Vuex 状态变化。
3. 不要在子组件中直接修改 props；通过事件让数据的拥有者完成修改。
4. 不要在 Vuex 严格模式下直接修改 state；通过 mutation 提交变更。
5. 掌握 Options API 后，可以再了解 Vue 2.7 内置的组合式 API，但无需一开始同时学习两种写法。

## 常用命令

```bash
npm run serve   # 启动开发环境
npm run build   # 生成生产构建
```
