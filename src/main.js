import Vue from 'vue';
import App from './App.vue';
import store from '@state/store'; 

// import components 
import key from './component/key/component.vue';
import SelectKey from './component/select-key/component.vue'
import SelectScale from './component/select-scale/component.vue'; 
import SelectChord from './component/select-chords/component.vue'; 

Vue.component('piano-key', key)
Vue.component('select-key', SelectKey)
Vue.component('select-scale', SelectScale)
Vue.component('select-chord', SelectChord)

new Vue({
  el: '#app',
  store, 
  render: h => h(App)
})