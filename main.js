const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase-admin');

//include firebase credential
var credential = require('./firebase.json');

//init firebase
firebase.initializeApp({
   credential: admin.credential.cert(credential),
   databaseURL: "https://chatapp-3da8d.firebaseio.com"
});

var app = express();

//middleware
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
   res.send('ok');
});

//default error handler
app.use(function (err, req, res, next) {
   console.log(err);

   res.status(500).send({
      succes: false,
      error: 'Internal server error'
   });
});

app.listen(process.env.PORT || 5000, function () {
   console.log('app ready');
});