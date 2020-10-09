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
        import('../views/Index.vue'),
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
      component: () => import('../views/Record.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: true,
      }
    },
    // 项目
    {
      path: '/project',
      name: 'Project',
      component: () => import('../views/Project.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: true,
      }
    },
    // 观影读书
    {
      path: '/viewing',
      name: 'Viewing',
      component: () => import('../views/Viewing.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: true,
      }
    },
    // 游戏
    {
      path: '/game',
      name: 'Game',
      component: () => import('../views/Game.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: true,
      }
    },
    // 和她
    {
      path: '/mylove',
      name: 'MyLove',
      component: () => import('../views/MyLove.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: true,
      }
    },
    // 💡
    {
      path: '/idea',
      name: 'Idea',
      component: () => import('../views/Idea.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: true,
      }
    }
  ]
})