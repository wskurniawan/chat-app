const Vue = require('vue');
const Vuetify = require('vuetify');

//main components
const App = require('./components/App.vue');

Vue.use(Vuetify);

new Vue({
   el: '#app',
   render: function(createElement){
      return createElement(App);
   }
});