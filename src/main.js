import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home  from "@/components/Home"
import Details from '@/components/Details'
import Register from '@/components/Register'
import Checkout from '@/components/Checkout'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/details', component: Details},
  { path: '/register', component: Register},
  { path: '/checkout', component: Checkout}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
