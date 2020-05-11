import App from './App.vue'
import Fab from '../dist/vue-fab'
// import Fab from '../src/index'
import Vue from 'vue'

Vue.use(Fab)

new Vue({
  render: h => h(App)
}).$mount('#app')
