import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNvtE5cA5CTjxm8AhD2-ej-crVDLs1YkA",
    authDomain: "repairs-f59d1.firebaseapp.com",
    databaseURL: "https://repairs-f59d1.firebaseio.com",
    projectId: "repairs-f59d1",
    storageBucket: "repairs-f59d1.appspot.com",
    messagingSenderId: "159094536005",
    appId: "1:159094536005:web:661488f288aa91971e702c",
    measurementId: "G-J4X95BYR7F"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(config);
 //const fireA = firebase.analytics();

 export default fire;