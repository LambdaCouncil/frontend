import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import 'firebase/firestore'

const firebaseConfig = process.env.NODE_ENV === 'production' ? {
    apiKey: "AIzaSyA7vboizvDrRORHvkT01Z8vKCOuH8In4UA",
    authDomain: "councils-589e4.firebaseapp.com",
    databaseURL: "https://councils-589e4.firebaseio.com",
    projectId: "councils-589e4",
    storageBucket: "councils-589e4.appspot.com",
    messagingSenderId: "419030896972",
    appId: "1:229687566803:android:9154556522d3253c",
    measurementId: "G-XTQP3M861X"
} : {
        apiKey: "AIzaSyCPVmMRkhRB5ebmcl8L_60kmcWI-_KI1Ow",
        authDomain: "council-c200f.firebaseapp.com",
        databaseURL: "https://council-c200f.firebaseio.com",
        projectId: "council-c200f",
        storageBucket: "council-c200f.appspot.com",
        messagingSenderId: "419030896972",
        appId: "1:419030896972:android:0f56b665454136744dbfe9",
        measurementId: "G-XTQP3M861X"
    }

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = table => firebase.firestore().collection(table)

export default firebase
