import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAX_E_iHzk-fTbfm8gZVmBGgyXpPw7vDfI",
    authDomain: "clone-bbebb.firebaseapp.com",
    databaseURL: "https://clone-bbebb.firebaseio.com",
    projectId: "clone-bbebb",
    storageBucket: "clone-bbebb.appspot.com",
    messagingSenderId: "371487746095",
    appId: "1:371487746095:web:fa7bb69bbdeb4918693eda",
    measurementId: "G-JN0WC2HBS3"
  };

  //initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);
 
//initialize database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };