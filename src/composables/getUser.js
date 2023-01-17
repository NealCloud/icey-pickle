import{auth} from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'

const user =   ref(auth.currentUser)

// auth changes
onAuthStateChanged(auth,(_user) => {
    user.value = _user
    if(user.value){
        console.log("user state change. current user is: ",  _user.uid)
    }
    else{
        console.log("logged out")
    }
    
} )

const getUser = () =>{
    return {user}
}

export default getUser