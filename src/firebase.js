import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCK2EOLwSZ322_LwExJLpAfMCpf2WSNVBo",
  authDomain: "react-todo-3d619.firebaseapp.com",
  projectId: "react-todo-3d619",
  storageBucket: "react-todo-3d619.appspot.com",
  messagingSenderId: "756923050754",
  appId: "1:756923050754:web:7b49a9791f2b1e38e9301b",
  measurementId: "G-3VYD0CYSCW"
};

// TODO: Use a configuration object
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// eslint-disable-next-line no-restricted-globals

export default firebase;
export { db };
