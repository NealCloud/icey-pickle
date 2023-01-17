import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyDtSWrMm_e_mw8acGYePpmqmoy4mVkzWnU",
  
    authDomain: "pickleballertest.firebaseapp.com",
  
    projectId: "pickleballertest",
  
    storageBucket: "pickleballertest.appspot.com",
  
    messagingSenderId: "924475184929",
  
    appId: "1:924475184929:web:c7b54243a7f21fbc3d9060"
  
  };

  initializeApp(firebaseConfig)
  const auth = getAuth()
  const db = getFirestore()
  
  export {db, auth}