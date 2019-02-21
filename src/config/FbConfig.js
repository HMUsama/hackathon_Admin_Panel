import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

var config = {
    apiKey: "AIzaSyBdY-GVfVeKxbNVqSmHmFMKhTYhFt5yJso",
    authDomain: "hackathon2019-f5f7f.firebaseapp.com",
    databaseURL: "https://hackathon2019-f5f7f.firebaseio.com",
    projectId: "hackathon2019-f5f7f",
    storageBucket: "hackathon2019-f5f7f.appspot.com",
    messagingSenderId: "968424081891"
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({ timestampsInSnapshots:true })


  export default firebase;