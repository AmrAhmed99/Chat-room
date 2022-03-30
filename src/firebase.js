import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAUJgCty3gCIDAifLy16jZLYfTDXHtuYfo",
    authDomain: "unichat-796f6.firebaseapp.com",
    projectId: "unichat-796f6",
    storageBucket: "unichat-796f6.appspot.com",
    messagingSenderId: "632375355372",
    appId: "1:632375355372:web:130b06eb854edcd9b882c9"
  }).auth();