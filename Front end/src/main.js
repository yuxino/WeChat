import Vue from 'vue'
import store from '@/store/store'
import App from './App'
import '@/components/common/common.sass'

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    store
});
