// JS
import './js/'

// SCSS
// import './assets/scss/variables.scss'
import './assets/scss/main.scss'
import router from './js/router.js'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
// Vue components (for use in html)
Vue.component('App', require('./js/App.vue').default)

console.log(router);
// Vue init
const app = new Vue({
  router,
  el: '#app'
})
