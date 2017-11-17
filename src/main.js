import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#003553',
    secondary: '#e0462a',
    accent: '#75468f',
    error: '#b71c1c'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
