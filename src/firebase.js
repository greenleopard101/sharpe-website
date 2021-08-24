import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcXTmuBkRAvwTvMoWpI8yg0Z5izlhvC1I",
  authDomain: "sharpe-website.firebaseapp.com",
  projectId: "sharpe-website",
  storageBucket: "sharpe-website.appspot.com",
  messagingSenderId: "194570636138",
  appId: "1:194570636138:web:8d203fad094c58a8657313",
  measurementId: "G-KWXD585V93",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
