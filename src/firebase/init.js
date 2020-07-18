import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJlFAMX5-MzpzMT6-5SDVw5M3EUXEvUD8",
  authDomain: "givers-income.firebaseapp.com",
  databaseURL: "https://givers-income.firebaseio.com",
  projectId: "givers-income",
  storageBucket: "givers-income.appspot.com",
  messagingSenderId: "319162953899",
  appId: "1:319162953899:web:cab8ebae4e95e8616407ee",
  measurementId: "G-DYPFC4H5G1"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();