import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BasicsView from '@/views/BasicsView.vue'
import ComponentsView from '@/views/ComponentsView.vue'
import RouterView from '@/views/RouterView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import VuexView from '@/views/VuexView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '学习首页' } },
    { path: '/basics', name: 'basics', component: BasicsView, meta: { title: '基础语法' } },
    { path: '/components', name: 'components', component: ComponentsView, meta: { title: '组件通信' } },
    { path: '/router', name: 'router', component: RouterView, meta: { title: '路由导航' } },
    { path: '/router/user/:id', name: 'user-profile', component: UserProfileView, meta: { title: '用户详情' } },
    { path: '/vuex', name: 'vuex', component: VuexView, meta: { title: 'Vuex 状态管理' } },
    { path: '*', name: 'not-found', component: NotFoundView, meta: { title: '页面不存在' } }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

// 全局前置守卫：每次跳转后，根据路由元信息更新页面标题。
router.afterEach(to => {
  document.title = `${to.meta.title || '学习项目'} - Vue 2`
})

export default router
