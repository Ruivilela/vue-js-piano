import Vue from 'vue';
import App from './App.vue';
import whiteKey from './component/whiteKey/component.vue';
import blackKey from './component/blackKey/component.vue';

Vue.component('white-key', whiteKey)
Vue.component('black-key', blackKey)

new Vue({
  el: '#app',
  render: h => h(App)
})