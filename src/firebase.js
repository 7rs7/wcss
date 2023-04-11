import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAcIy8UaZD-SY-xAaN9X_h3Pumtjavpgf8",
  authDomain: "wcss-app.firebaseapp.com",
  projectId: "wcss-app",
  storageBucket: "wcss-app.appspot.com",
  messagingSenderId: "326241687447",
  appId: "1:326241687447:web:71f61421a5411c67d456d2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
