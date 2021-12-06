import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseNextMusic = firebase.initializeApp({
    apiKey: "AIzaSyBqrCfEcIBoQS2pTGufA7mSAj7czucKHyY",
    authDomain: "music-8bf25.firebaseapp.com",
    projectId: "music-8bf25",
    storageBucket: "music-8bf25.appspot.com",
    messagingSenderId: "598302395944",
    appId: "1:598302395944:web:67f4f83b6b11f08afeef1d",
    measurementId: "G-Z5XF6K4ZCQ"
})

const db = firebaseNextMusic.firestore()

const auth = firebaseNextMusic.auth()

export { db, auth }