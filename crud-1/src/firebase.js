import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAjfOkd3KyRUyz7tUdwV0LWd-iZseMgCkE",
    authDomain: "vue-crud-1-b160c.firebaseapp.com",
    databaseURL: "https://vue-crud-1-b160c.firebaseio.com",
    projectId: "vue-crud-1-b160c",
    storageBucket: "vue-crud-1-b160c.appspot.com",
    messagingSenderId: "1071819102040",
    appId: "1:1071819102040:web:c3da6df4fa337b25b4b72d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};