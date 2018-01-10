// 

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)



import store from './store'
import App from './app/app.vue'



const Root = new Vue({
	el: '#app',
	store,
	render: h => h(App),
})







