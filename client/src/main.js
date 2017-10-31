// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Router from 'vue-router'
import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import routes from './router'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router(routes)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
