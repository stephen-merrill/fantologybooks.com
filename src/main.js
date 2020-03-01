import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import '@/styles/bulma.scss'
import LandingPage from '@/components/landing-page/LandingPage.vue'
import SearchPage from '@/components/search-page/SearchPage.vue'
import EpisodePage from '@/components/episode-page/EpisodePage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/episode/:id', component: EpisodePage },
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
