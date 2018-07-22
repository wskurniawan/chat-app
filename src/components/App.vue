<template>
   <div class="uk-flex uk-flex-center" style="background-color: #E0E0E0;">
      <login></login>
   </div>
</template>

<script>
const firebase = require('@firebase/app').default;

//components
const Login = require('./Login.vue');


//init firebase
var config = {
   apiKey: "AIzaSyA-P-dbJWoL3ScOoRYa4ZQhVUU3-RLcmCA",
   authDomain: "chatapp-3da8d.firebaseapp.com",
   databaseURL: "https://chatapp-3da8d.firebaseio.com",
   projectId: "chatapp-3da8d",
   storageBucket: "chatapp-3da8d.appspot.com",
   messagingSenderId: "551819635077"
};

firebase.initializeApp(config);

module.exports = {
   components: {
      login: Login
   }
}
</script>
