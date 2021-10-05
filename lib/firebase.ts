import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBKUy_bfxGzbvJKabajoZhDcGlA-96oObs',
  authDomain: 'simple-firebase-todo.firebaseapp.com',
  projectId: 'simple-firebase-todo',
  storageBucket: 'simple-firebase-todo.appspot.com',
  messagingSenderId: '454797444460',
  appId: '1:454797444460:web:a6c28735dbee9ee7d21f49',
}

// Initialize firebase
firebase.initializeApp(firebaseConfig)
export default firebase
