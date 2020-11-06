import Vue from 'vue'
import Router from 'vue-router'
import AuthPage from './views/auth-page.vue'
import ApplicationPage from './/views/application-page.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  cash: true,
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: AuthPage
    },
    {
      path: '/application',
      name: 'ApplicationPage',
      component: ApplicationPage,
    }
  ]
})