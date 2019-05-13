import Vue from 'vue'
import store from '@/store'
import App from './App'
import ClickOutSide from '@/directives/ClickOutSide'
import '@/sass/main.scss'

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(ClickOutSide)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { App },
  store
})
