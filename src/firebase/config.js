import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// Use environment variables (see .env.example). Do not commit real keys.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

if (!firebaseConfig.apiKey) {
  // Helps local setup without crashing obscurely
  console.warn(
    'Firebase env vars missing. Copy .env.example to .env and add your Firebase web config.'
  )
}

export const Firebase = firebase.initializeApp(firebaseConfig)
export const auth = Firebase.auth()
export default Firebase
