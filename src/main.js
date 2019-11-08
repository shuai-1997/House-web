// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/theme/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'
Vue.use(ElementUI);
Vue.use(MintUI)

//组件
import ui from "./components/componentsIndex"
Vue.use(ui)

import axios from "axios"

axios.defaults.baseURL="http://127.0.0.1:3000"
Vue.prototype.$http=axios

Vue.config.productionTip = false
Vue.prototype.$URL="http://127.0.0.1:3000/upload/"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   store,
  components: { App },
  template: '<App/>'
})
