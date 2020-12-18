import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsjPoxDjYzXnTvoDzN-XNzUqtJjSSr1dY",
  authDomain: "bright-future-252e3.firebaseapp.com",
  projectId: "bright-future-252e3",
  storageBucket: "bright-future-252e3.appspot.com",
  messagingSenderId: "183604235135",
  appId: "1:183604235135:web:97c674f81ba8e583fd284a",
  measurementId: "G-GPNHE1BY7S"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();