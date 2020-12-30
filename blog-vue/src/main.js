import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/font/font.css';
import './common/icon/iconfont.css'
import './assets/css/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(router)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
