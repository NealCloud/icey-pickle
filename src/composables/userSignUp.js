import { ref } from "vue"

import { auth } from '../firebase/config'
import{ createUserWithEmailAndPassword} from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)
const user = ref(null)

const signup = async (email, password) => {
    error.value = null
    isPending.value = true

    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if(!res){
            throw new Error('Could not compelte signup')
        }
        user.value = res.user
        error.value = null
        isPending.value = false
    }
    catch (err){
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () =>{
    return{ user, error, isPending, signup}
}

export default useSignup