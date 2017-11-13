import Vue from 'vue'
import store from '@/store/store'
import App from './App'
import '@/components/common/common.sass'
import ClickOutSide from '@/libs/ClickOutSide'

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(ClickOutSide)

new Vue({
    el: '#app',
    components: { App },
    store
});
