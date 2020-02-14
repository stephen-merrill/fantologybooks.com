import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bulma/css/bulma.css'
import LandingPage from '@/components/landing-page/LandingPage.vue'
import SearchPage from '@/components/search-page/SearchPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/search', component: SearchPage },
  { path: '/', component: LandingPage },
]
const router = new VueRouter({
  mode: 'history',
  routes: routes
})


new Vue({
  router: router,
  render: createEle => createEle(App)
}).$mount('#app')
