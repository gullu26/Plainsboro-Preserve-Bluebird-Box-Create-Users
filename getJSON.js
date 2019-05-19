// import {firestoreExport} from 'node-firestore-import-export';
// import * as firebase from 'firebase-admin';

const e = require('node-firestore-import-export');
const firebase = require('firebase-admin');


var serviceAccount = require("serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://plainsborobluebirdboxwatch.firebaseio.com"
});



const collectionRef = firebase.firestore().collection('users');

e.firestoreExport(collectionRef)
    .then(data=>console.log(data));
