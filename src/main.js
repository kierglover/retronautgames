import Vue from 'vue'
import App from './App.vue'
import Hero from './components/Hero.vue'
import Modal from './components/Modal.vue'
import Grid from './components/Grid.vue'

var Sass = require('sass');
var cssify = require('cssify');
cssify.byUrl('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.css')

Vue.component('app-hero', Hero);
Vue.component('app-modal', Modal);
Vue.component('app-grid', Grid);

new Vue({
  el: '#app',
  render: h => h(App)
})
