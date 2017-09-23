import Vue from 'vue';
import App from './App.vue';
import key from './component/key/component.vue';

Vue.component('piano-key', key)

new Vue({
  el: '#app',
  render: h => h(App)
})