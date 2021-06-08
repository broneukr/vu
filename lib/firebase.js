import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCKH5LLzabIIhwJTwMSgkZyEPHlcBjejW0",
    authDomain: "jiijii.firebaseapp.com",
    databaseURL: "https://jiijii.firebaseio.com",
    projectId: "jiijii",
    storageBucket: "jiijii.appspot.com",
    messagingSenderId: "1079817905260",
    appId: "1:1079817905260:web:90cd407ddb7a86431a2449"
  })
}

export default firebase
