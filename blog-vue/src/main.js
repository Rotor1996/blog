import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/font/font.css';
import './common/icon/iconfont.css'

Vue.use(router)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
