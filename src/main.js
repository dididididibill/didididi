import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './assets/reset.css'
import * as echarts from 'echarts';//引入echarts
import axios from 'axios'


Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts //引入组件
Vue.use(vant) 
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
