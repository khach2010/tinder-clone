import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCWpYHWDwiEM98nEcNgtwloKp_UJ8QhwOA',
  authDomain: 'tinder-clone-6aa05.firebaseapp.com',
  databaseURL: 'https://tinder-clone-6aa05.firebaseio.com',
  projectId: 'tinder-clone-6aa05',
  storageBucket: 'tinder-clone-6aa05.appspot.com',
  messagingSenderId: '2426501221',
  appId: '1:2426501221:web:0118f66155c715dc00ee8c',
  measurementId: 'G-XTM866M6JP'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
