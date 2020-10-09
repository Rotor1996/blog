import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    // 引导页
    {
      path: '/',
      name: 'Index',
      component: () =>
        import('../views/index.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: false
      }
    },
    // 记录
    {
      path: '/record',
      name: 'Record',
      component: () => import('../views/record.vue'),
      meta: {
        keepAlive: true,
        level: 0,
        tabbar: true,
      }
    }
  ]
})