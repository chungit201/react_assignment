import firebase from "firebase/app";
import "firebase/storage";
import "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyA7QPXVinNi88bz7j-liHviA-RP7qZahcE",
  authDomain: "react-app-38d27.firebaseapp.com",
  projectId: "react-app-38d27",
  storageBucket: "react-app-38d27.appspot.com",
  messagingSenderId: "867717244935",
  appId: "1:867717244935:web:9ee1edd4cdf4d67cece2a2",
  measurementId: "G-ZFD5D30XMB"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const messaging = firebase.messaging();

export {storage, messaging, firebase as default};