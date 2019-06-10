import App from './App.vue'
import Fab from '../src/index.ts'
import Vue from 'vue'

Vue.use(Fab)

new Vue({
  render: h => h(App)
}).$mount('#app')
