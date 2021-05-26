import * as firebase from 'firebase'

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyDhu9hvkTADJE8Tk62jEa7wLXUQh0Mxv7M",
      authDomain: "okwu-app.firebaseapp.com",
      projectId: "okwu-app",
      storageBucket: "okwu-app.appspot.com",
      messagingSenderId: "875892438524",
      appId: "1:875892438524:web:92d4fafef09913ab9fae79",
      measurementId: "G-YWFTZBHXEZ"
};

let app;

if(firebase.apps.length=== 0){
  app=firebase.initializeApp(firebaseConfig);
} else {
  app=firebase.app()
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }