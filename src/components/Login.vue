<template>
   <div class="ws-mobile-container" style="background-color: white;" uk-height-viewport>
      <div class="uk-text-center ws-divider-m">
         <h3 style="color: #00BFA5;">Login</h3>
      </div>

      <div class="uk-flex uk-flex-center">
         <v-btn v-on:click="googleAuth">
            <v-icon color="teal accent-4">fab fa-google</v-icon>
            <div style="margin-left: 12px;">Google</div>
         </v-btn>
      </div>
   </div>
</template>

<script>
const firebase = require('@firebase/app').default;
require('@firebase/auth');

module.exports = {
   created: function(){
      console.log(firebase.auth().currentUser);
   },
   methods: {
      googleAuth: function(){
         var provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().languageCode = 'id';

         firebase.auth().signInWithRedirect(provider);
      }
   },
   mounted: function(){
      firebase.auth().getRedirectResult().then(result => {
            console.log(result);
         }).catch(err => {
            console.log(err);
         });
   }
}
</script>

