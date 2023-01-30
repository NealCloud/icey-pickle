import { ref} from 'vue'

import {  getDoc } from 'firebase/firestore'


const getDocument = async (docRef)=> {
    const error = ref('')

    //const docRef = doc(db, docTitle, docMap1);
    const document = ref(null)             
    let docSnap = await getDoc(docRef)
    if (docSnap.exists()) {              
        document.value = ({ ...docSnap.data()})            
    } else {
        error.value = 'doc does not exist'        // doc.data() will be undefined in this case        
    }
    return { document, error}
}

export default getDocument